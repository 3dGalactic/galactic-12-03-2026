"use client"


import { Canvas, useLoader, useThree } from "@react-three/fiber"
import { OrbitControls, Html, Line, Box } from "@react-three/drei"
import { STLLoader } from "three/examples/jsm/loaders/STLLoader"
import { useEffect, useRef, useMemo, useState } from "react"
import * as THREE from "three"


// ===== MATERIAL DATABASE =====
const MATERIAL_DATABASE = {
    PLA: { density: 1.24, costPerKg: 20, printSpeed: 15 },
    ABS: { density: 1.04, costPerKg: 22, printSpeed: 14 },
    PETG: { density: 1.27, costPerKg: 25, printSpeed: 13 },
    Nylon: { density: 1.15, costPerKg: 60, printSpeed: 10 }
}

const MACHINE_RATE_PER_HOUR = 90.7159


function Model({ url, onAnalysis, onClickPoint, onHeight, sliceHeight }) {

    const handleClick = (e) => {
        e.stopPropagation()
        if (onClickPoint) onClickPoint(e.point.clone())
    }

    const geometry = useLoader(STLLoader, url)
    const { camera } = useThree()

    const processedGeometry = useMemo(() => {
        const originalGeo = geometry.clone()   
        const geo = geometry.clone()
        
        // ===== AUTO ORIENTATION FOR MINIMAL SUPPORT =====

const testOrientations = [
    { x: 0, y: 0, z: 0 },
    { x: Math.PI / 2, y: 0, z: 0 },
    { x: -Math.PI / 2, y: 0, z: 0 },
    { x: 0, y: 0, z: Math.PI / 2 },
    { x: 0, y: 0, z: -Math.PI / 2 },
    { x: Math.PI, y: 0, z: 0 },
]

let bestScore = Infinity
let bestRotation = { x: 0, y: 0, z: 0 }

for (const rot of testOrientations) {

    const testGeo = geometry.clone()

    testGeo.rotateX(rot.x)
    testGeo.rotateY(rot.y)
    testGeo.rotateZ(rot.z)

    testGeo.computeVertexNormals()

    const normal = testGeo.attributes.normal
    const down = new THREE.Vector3(0, -1, 0)

    let supportScore = 0

const pos = testGeo.attributes.position.array
const norm = testGeo.attributes.normal.array

for (let i = 0; i < pos.length; i += 9) {

    const p1 = new THREE.Vector3(pos[i], pos[i+1], pos[i+2])
    const p2 = new THREE.Vector3(pos[i+3], pos[i+4], pos[i+5])
    const p3 = new THREE.Vector3(pos[i+6], pos[i+7], pos[i+8])

    // triangle area
    const area = p2.clone().sub(p1).cross(
                 p3.clone().sub(p1)
               ).length() * 0.5

    const nx = (norm[i] + norm[i+3] + norm[i+6]) / 3
    const ny = (norm[i+1] + norm[i+4] + norm[i+7]) / 3
    const nz = (norm[i+2] + norm[i+5] + norm[i+8]) / 3

    const n = new THREE.Vector3(nx, ny, nz).normalize()

    const down = new THREE.Vector3(0, -1, 0)
    const angle = n.angleTo(down) * (180 / Math.PI)

    // penalize downward faces that are steep
    if (angle < 80) {
        supportScore += area * (1 - Math.cos(THREE.MathUtils.degToRad(angle)))
    }
}


    if (supportScore < bestScore) {
        bestScore = supportScore
        bestRotation = rot
    }
}

// APPLY BEST ROTATION
geo.rotateX(bestRotation.x)
geo.rotateY(bestRotation.y)
geo.rotateZ(bestRotation.z)



        geo.computeBoundingBox()
        const box = geo.boundingBox

        const size = new THREE.Vector3()
        box.getSize(size)

        // ===== AUTO ORIENT FLAT ON BUILD PLATE =====

        

        





        const center = new THREE.Vector3()
        geo.boundingBox.getCenter(center)


        // center model
        geo.translate(-center.x, -center.y, -center.z)
        // move model so bottom touches build plate (Y=0)
        geo.computeBoundingBox()
        const newBox = geo.boundingBox
        geo.translate(0, -newBox.min.y, 0)





        // normalize scale (fit into 100mm cube visual space)
        const maxDim = Math.max(size.x, size.y, size.z)
        const scale = 100 / maxDim
        geo.scale(scale, scale, scale)

       


        // recompute after transform
        geo.computeBoundingBox()
        geo.computeVertexNormals()

        const finalHeight = geo.boundingBox.max.y - geo.boundingBox.min.y
        if (onHeight) onHeight(finalHeight)


        // ===== OVERHANG HEATMAP =====
        const up = new THREE.Vector3(0, 1, 0)
        const pos = geo.attributes.position
        const normal = geo.attributes.normal

        const colors = new Float32Array(pos.count * 3)

        for (let i = 0; i < pos.count; i++) {

            const n = new THREE.Vector3(
                normal.getX(i),
                normal.getY(i),
                normal.getZ(i)
            ).normalize()

            const angle = n.angleTo(up) * (180 / Math.PI)

            let r = 0, g = 0, b = 0

            if (angle < 30) {
                // SAFE → BLUE
                r = 0
                g = 0.6
                b = 1
            }
            else if (angle < 60) {
                // WARNING → YELLOW
                r = 1
                g = 0.8
                b = 0
            }
            else {
                // SUPPORT NEEDED → RED
                r = 1
                g = 0
                b = 0
            }

            colors[i * 3] = r
            colors[i * 3 + 1] = g
            colors[i * 3 + 2] = b
        }

        geo.setAttribute("color", new THREE.BufferAttribute(colors, 3))


        // estimate volume
        let volume = 0
        const position = originalGeo.attributes.position.array


        for (let i = 0; i < position.length; i += 9) {
            const p1 = new THREE.Vector3(position[i], position[i + 1], position[i + 2])
            const p2 = new THREE.Vector3(position[i + 3], position[i + 4], position[i + 5])
            const p3 = new THREE.Vector3(position[i + 6], position[i + 7], position[i + 8])
            volume += p1.dot(p2.cross(p3))
        }
        volume = Math.abs(volume / 6)



        onAnalysis({
            width: size.x.toFixed(2),
            height: size.y.toFixed(2),
            depth: size.z.toFixed(2),
            volume: volume.toFixed(2)
        })

        return geo
    }, [geometry])

    useEffect(() => {
        camera.position.set(150, 120, 150)
    }, [camera])


    return (
        <group>
            <mesh geometry={processedGeometry} onClick={handleClick}>
                <meshStandardMaterial
                    vertexColors
                    metalness={0.2}
                    roughness={0.35}
                    clippingPlanes={[new THREE.Plane(new THREE.Vector3(0, -1, 0), sliceHeight)]}
                    clipShadows
                />



            </mesh>

            {/* BOUNDING BOX VISUAL */}
            <primitive
                object={new THREE.BoxHelper(
                    new THREE.Mesh(processedGeometry),
                    "#00ff88"
                )}
            />
        </group>
    )

}

export default function STLViewer({ fileUrl }) {
    const [analysis, setAnalysis] = useState(null)
    const [points, setPoints] = useState([])
    const [distance, setDistance] = useState(null)
    const [selectedMaterial, setSelectedMaterial] = useState("PLA")
    const [costData, setCostData] = useState(null)
    const [controlsEnabled, setControlsEnabled] = useState(true)
    const [buildWarning, setBuildWarning] = useState(null)
    const [sliceHeight, setSliceHeight] = useState(0)
    const [isSlicing, setIsSlicing] = useState(false)
    const [maxHeight, setMaxHeight] = useState(100)












    useEffect(() => {
        if (!analysis) return
        const MACHINE_BUILD_VOLUME = {
            x: 220,
            y: 220,
            z: 250
        }

        const w = parseFloat(analysis.width)
        const h = parseFloat(analysis.height)
        const d = parseFloat(analysis.depth)

        if (
            w > MACHINE_BUILD_VOLUME.x ||
            h > MACHINE_BUILD_VOLUME.y ||
            d > MACHINE_BUILD_VOLUME.z
        ) {
            setBuildWarning("Part exceeds machine build volume")
        } else {
            setBuildWarning(null)
        }







        const material = MATERIAL_DATABASE[selectedMaterial]

        const volumeMM3 = parseFloat(analysis.volume)
        const volumeCM3 = volumeMM3 / 1000

        const weightGrams = volumeCM3 * material.density
        const materialCost = (weightGrams / 1000) * material.costPerKg

        const printTimeHours = volumeCM3 / material.printSpeed
        const machineCost = printTimeHours * MACHINE_RATE_PER_HOUR

        const totalCost = materialCost + machineCost

        setCostData({
            weight: weightGrams.toFixed(2),
            printTime: printTimeHours.toFixed(2),
            materialCost: materialCost.toFixed(2),
            machineCost: machineCost.toFixed(2),
            totalCost: totalCost.toFixed(2)
        })
    }, [analysis, selectedMaterial])

    useEffect(() => {
        if (!isSlicing) return

        const id = setInterval(() => {
            setSliceHeight(prev => {
                if (prev >= maxHeight) return prev
                return prev + 0.2
            })
        }, 120)

        return () => clearInterval(id)
    }, [isSlicing, maxHeight])


    if (!fileUrl) return null

    const slicePlane = useMemo(
        () => new THREE.Plane(new THREE.Vector3(0, -1, 0), sliceHeight),
        [sliceHeight]
    )

    return (
        <div className="w-full h-[100vh] bg-[#0b0f14] rounded-xl overflow-hidden relative">

            {/* ANALYSIS PANEL */}
            {buildWarning && (
                <div className="mt-3 text-red-400 font-semibold">
                    ⚠ {buildWarning}
                </div>
            )}

            {analysis && (
                <div
                    className="
    absolute top-6 left-6 z-50
    w-72
    rounded-2xl
    bg-white/5
    backdrop-blur-xl
    border border-white/10
    shadow-2xl shadow-black/40
    p-5
    text-white
    text-sm
    space-y-3
    pointer-events-auto
  "
                    onPointerEnter={() => setControlsEnabled(false)}
                    onPointerLeave={() => setControlsEnabled(true)}
                >



                    <div className="space-y-1">
                        <div className="text-xs text-white/60 uppercase tracking-wider">Dimensions</div>
                        

                        <div className="flex justify-between"><span>Width</span><span>{analysis.width} mm</span></div>
                        <div className="flex justify-between"><span>Height</span><span>{analysis.height} mm</span></div>
                        <div className="flex justify-between"><span>Depth</span><span>{analysis.depth} mm</span></div>
                        <div className="flex justify-between"><span>Volume</span><span>{analysis.volume} mm³</span></div>
                    </div>

                    <select
                        value={selectedMaterial}
                        onChange={(e) => setSelectedMaterial(e.target.value)}
                        className="bg-black text-white border px-2 py-1 mt-2 w-full"
                    >
                        {Object.keys(MATERIAL_DATABASE).map(mat => (
                            <option key={mat}>{mat}</option>
                        ))}
                    </select>
                    {costData && (
                        <>
                            <div className="mt-2">Weight: {costData.weight} g</div>
                            <div>Print Time: {costData.printTime} hrs</div>
                            <div>Material Cost: ₹{costData.materialCost}</div>
                            <div>Machine Cost: ₹{costData.machineCost}</div>
                            <div className="font-bold text-green-400">
                                Total Price: ₹{costData.totalCost}
                            </div>
                        </>
                    )}
                    {distance && (
                        <div className="text-yellow-300 mt-2">
                            Distance: {distance} mm
                        </div>
                    )}

                    <div className="mt-3 border-t border-gray-600 pt-3">

                        <button
                            onClick={() => setIsSlicing(v => !v)}
                            className="bg-green-600 px-3 py-1 rounded text-sm w-28"
                        >
                            {isSlicing ? "Pause Slice" : "Start Slice"}
                        </button>

                        <input
                            type="range"
                            min={0}
                            max={maxHeight}
                            step={0.5}
                            value={sliceHeight}
                            onChange={e => setSliceHeight(parseFloat(e.target.value))}
                            className="w-full mt-2"
                        />

                        <div className="text-xs mt-1">
                            Slice Height: {sliceHeight.toFixed(2)} mm
                        </div>

                    </div>
                </div>

            )}





            <Canvas camera={{ fov: 45 }} gl={{ localClippingEnabled: true }}>
                <ambientLight intensity={0.6} />
                <directionalLight position={[200, 200, 100]} intensity={1} />

                <gridHelper args={[300, 30]} />
                <axesHelper args={[100]} />
                {/* PRINT BED */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]}>
                    <planeGeometry args={[300, 300]} />
                    <meshStandardMaterial
                        color="#1a1f26"
                        roughness={0.9}
                        metalness={0.05}
                    />
                </mesh>



                <Model
                    url={fileUrl}
                    onAnalysis={setAnalysis}
                    onHeight={setMaxHeight}
                    sliceHeight={sliceHeight}
                    onClickPoint={(point) => {
                        setPoints(prev => {
                            const updated = [...prev, point].slice(-2)

                            if (updated.length === 2) {
                                const d = updated[0].distanceTo(updated[1])
                                setDistance(d.toFixed(2))
                            }

                            return updated
                        })
                    }}
                />
                {points.map((p, i) => (
                    <mesh key={i} position={p}>
                        <sphereGeometry args={[2, 16, 16]} />
                        <meshStandardMaterial color="red" />
                    </mesh>
                ))}

                {points.length === 2 && (
                    <Line
                        points={[points[0], points[1]]}
                        color="yellow"
                        lineWidth={2}
                    />
                )}




                <OrbitControls enabled={controlsEnabled} />

            </Canvas>
        </div>
    )
}



















// "use client"

// import { Canvas, useLoader, useThree } from "@react-three/fiber"
// import { OrbitControls, Line } from "@react-three/drei"
// import { STLLoader } from "three/examples/jsm/loaders/STLLoader"
// import { useEffect, useMemo, useState } from "react"
// import * as THREE from "three"

// /* =========================================================
//    MATERIAL DATABASE
// ========================================================= */

// const MATERIAL_DATABASE = {
//   PLA: { density: 1.24, costPerKg: 20, printSpeed: 15 },
//   ABS: { density: 1.04, costPerKg: 22, printSpeed: 14 },
//   PETG: { density: 1.27, costPerKg: 25, printSpeed: 13 },
//   Nylon: { density: 1.15, costPerKg: 60, printSpeed: 10 }
// }

// const MACHINE_RATE_PER_HOUR = 90.7159
// const LAYER_HEIGHT = 0.2
// const SLICE_INTERVAL = 120

// /* =========================================================
//    MODEL COMPONENT
// ========================================================= */

// function Model({ url, onAnalysis, onHeight, sliceHeight, onClickPoint }) {

//   const geometry = useLoader(STLLoader, url)
//   const { camera } = useThree()

//   const processedGeometry = useMemo(() => {

//     const originalGeo = geometry.clone()
//     const geo = geometry.clone()

//     geo.computeBoundingBox()
//     const box = geo.boundingBox

//     const size = new THREE.Vector3()
//     box.getSize(size)

//     /* AUTO ORIENT FLAT */
//     const dims = [
//       { axis: "x", value: size.x },
//       { axis: "y", value: size.y },
//       { axis: "z", value: size.z }
//     ].sort((a, b) => a.value - b.value)

//     const smallest = dims[0].axis

//     if (smallest === "x") geo.rotateZ(Math.PI / 2)
//     else if (smallest === "z") geo.rotateX(Math.PI / 2)

//     geo.rotateX(Math.PI)
//     geo.computeBoundingBox()

//     const center = new THREE.Vector3()
//     geo.boundingBox.getCenter(center)
//     geo.translate(-center.x, -center.y, -center.z)

//     geo.computeBoundingBox()
//     geo.translate(0, -geo.boundingBox.min.y, 0)

//     const maxDim = Math.max(size.x, size.y, size.z)
//     const scale = 100 / maxDim
//     geo.scale(scale, scale, scale)

//     geo.computeBoundingBox()
//     geo.computeVertexNormals()

//     const finalHeight = geo.boundingBox.max.y - geo.boundingBox.min.y
//     onHeight?.(finalHeight)

//     /* OVERHANG HEATMAP */
//     const up = new THREE.Vector3(0, 1, 0)
//     const pos = geo.attributes.position
//     const normal = geo.attributes.normal
//     const colors = new Float32Array(pos.count * 3)

//     for (let i = 0; i < pos.count; i++) {
//       const n = new THREE.Vector3(
//         normal.getX(i),
//         normal.getY(i),
//         normal.getZ(i)
//       ).normalize()

//       const angle = n.angleTo(up) * (180 / Math.PI)

//       let r=0,g=0,b=0
//       if (angle < 30) { g=0.6; b=1 }
//       else if (angle < 60) { r=1; g=0.8 }
//       else { r=1 }

//       colors[i*3]=r
//       colors[i*3+1]=g
//       colors[i*3+2]=b
//     }

//     geo.setAttribute("color", new THREE.BufferAttribute(colors,3))

//     /* VOLUME */
//     let volume = 0
//     const p = originalGeo.attributes.position.array

//     for (let i=0;i<p.length;i+=9){
//       const p1 = new THREE.Vector3(p[i],p[i+1],p[i+2])
//       const p2 = new THREE.Vector3(p[i+3],p[i+4],p[i+5])
//       const p3 = new THREE.Vector3(p[i+6],p[i+7],p[i+8])
//       volume += p1.dot(p2.cross(p3))
//     }

//     volume = Math.abs(volume/6)

//     onAnalysis({
//       width: size.x.toFixed(2),
//       height: size.y.toFixed(2),
//       depth: size.z.toFixed(2),
//       volume: volume.toFixed(2)
//     })

//     return geo

//   }, [geometry])

//   useEffect(()=>{
//     camera.position.set(150,120,150)
//   },[camera])

//   return (
//     <mesh
//       geometry={processedGeometry}
//       onClick={e=>onClickPoint?.(e.point.clone())}
//     >
//       <meshStandardMaterial
//         vertexColors
//         metalness={0.25}
//         roughness={0.35}
//         clippingPlanes={[ new THREE.Plane(new THREE.Vector3(0,-1,0), sliceHeight) ]}
//         clipShadows
//       />
//     </mesh>
//   )
// }

// /* =========================================================
//    MAIN VIEWER
// ========================================================= */

// export default function STLViewer({ fileUrl }) {

//   const [analysis,setAnalysis]=useState(null)
//   const [sliceHeight,setSliceHeight]=useState(0)
//   const [maxHeight,setMaxHeight]=useState(100)
//   const [isSlicing,setIsSlicing]=useState(false)
//   const [selectedMaterial,setSelectedMaterial]=useState("PLA")
//   const [costData,setCostData]=useState(null)
//   const [points,setPoints]=useState([])
//   const [distance,setDistance]=useState(null)
//   const [controlsEnabled,setControlsEnabled]=useState(true)

//   /* COST */
//   useEffect(()=>{
//     if(!analysis) return

//     const material=MATERIAL_DATABASE[selectedMaterial]
//     const volumeMM3=parseFloat(analysis.volume)
//     const volumeCM3=volumeMM3/1000

//     const weight=volumeCM3*material.density
//     const materialCost=(weight/1000)*material.costPerKg
//     const printTime=volumeCM3/material.printSpeed
//     const machineCost=printTime*MACHINE_RATE_PER_HOUR

//     setCostData({
//       weight:weight.toFixed(2),
//       printTime:printTime.toFixed(2),
//       materialCost:materialCost.toFixed(2),
//       machineCost:machineCost.toFixed(2),
//       totalCost:(materialCost+machineCost).toFixed(2)
//     })
//   },[analysis,selectedMaterial])

//   /* SLICE ANIMATION */
//   useEffect(()=>{
//     if(!isSlicing) return

//     const id=setInterval(()=>{
//       setSliceHeight(prev=>{
//         const next=prev+LAYER_HEIGHT
//         return next>maxHeight?maxHeight:next
//       })
//     },SLICE_INTERVAL)

//     return()=>clearInterval(id)
//   },[isSlicing,maxHeight])

//   if(!fileUrl) return null

//   const progress=(sliceHeight/maxHeight)*100

//   return (
//     <div className="w-full h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black relative overflow-hidden">

//       {/* ================================================= UI PANEL */}

//       <div
//         className="
//           absolute top-6 left-6 z-50 w-80
//           rounded-3xl
//           bg-white/5 backdrop-blur-2xl
//           border border-white/10
//           shadow-2xl shadow-black/50
//           p-6 text-white
//           space-y-4
//         "
//         onPointerEnter={()=>setControlsEnabled(false)}
//         onPointerLeave={()=>setControlsEnabled(true)}
//       >

//         <div className="text-lg font-semibold tracking-wide">3D Print Analyzer</div>

//         {analysis && (
//           <>

//             <div className="space-y-1 text-sm">
//               <div className="flex justify-between"><span>Width</span><span>{analysis.width} mm</span></div>
//               <div className="flex justify-between"><span>Height</span><span>{analysis.height} mm</span></div>
//               <div className="flex justify-between"><span>Depth</span><span>{analysis.depth} mm</span></div>
//               <div className="flex justify-between"><span>Volume</span><span>{analysis.volume} mm³</span></div>
//             </div>

//             <select
//               value={selectedMaterial}
//               onChange={e=>setSelectedMaterial(e.target.value)}
//               className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2"
//             >
//               {Object.keys(MATERIAL_DATABASE).map(m=> <option key={m}>{m}</option>)}
//             </select>

//             {costData && (
//               <div className="space-y-1 text-sm">
//                 <div className="flex justify-between"><span>Weight</span><span>{costData.weight} g</span></div>
//                 <div className="flex justify-between"><span>Time</span><span>{costData.printTime} hrs</span></div>
//                 <div className="flex justify-between"><span>Material</span><span>₹{costData.materialCost}</span></div>
//                 <div className="flex justify-between"><span>Machine</span><span>₹{costData.machineCost}</span></div>
//                 <div className="flex justify-between font-semibold text-emerald-400">
//                   <span>Total</span>
//                   <span>₹{costData.totalCost}</span>
//                 </div>
//               </div>
//             )}

//             <div className="pt-3 border-t border-white/10 space-y-3">

//               <button
//                 onClick={()=>setIsSlicing(v=>!v)}
//                 className="w-full py-2 rounded-xl font-medium bg-gradient-to-r from-emerald-500 to-cyan-500 hover:opacity-90 transition"
//               >
//                 {isSlicing?"Pause Build":"Start Build"}
//               </button>

//               <input
//                 type="range"
//                 min={0}
//                 max={maxHeight}
//                 step={0.2}
//                 value={sliceHeight}
//                 onChange={e=>setSliceHeight(parseFloat(e.target.value))}
//                 className="w-full accent-emerald-400"
//               />

//               <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
//                 <div
//                   className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400"
//                   style={{ width:`${progress}%` }}
//                 />
//               </div>

//               <div className="text-xs text-white/60">
//                 Layer: {sliceHeight.toFixed(2)} / {maxHeight.toFixed(2)} mm
//               </div>

//             </div>

//           </>
//         )}

//       </div>

//       {/* ================================================= 3D SCENE */}

//       <Canvas camera={{fov:45}} gl={{localClippingEnabled:true}}>

//         <ambientLight intensity={0.6}/>
//         <directionalLight position={[200,200,100]} intensity={1}/>

//         <gridHelper args={[300,30]}/>
//         <axesHelper args={[100]}/>

//         <mesh rotation={[-Math.PI/2,0,0]} position={[0,-0.1,0]}>
//           <planeGeometry args={[300,300]}/>
//           <meshStandardMaterial color="#111827" roughness={0.9}/>
//         </mesh>

//         <Model
//           url={fileUrl}
//           onAnalysis={setAnalysis}
//           onHeight={setMaxHeight}
//           sliceHeight={sliceHeight}
//           onClickPoint={(p)=>{
//             setPoints(prev=>{
//               const updated=[...prev,p].slice(-2)
//               if(updated.length===2){
//                 setDistance(updated[0].distanceTo(updated[1]).toFixed(2))
//               }
//               return updated
//             })
//           }}
//         />

//         {points.map((p,i)=>(
//           <mesh key={i} position={p}>
//             <sphereGeometry args={[2,16,16]}/>
//             <meshStandardMaterial color="red"/>
//           </mesh>
//         ))}

//         {points.length===2 && (
//           <Line points={[points[0],points[1]]} color="yellow" lineWidth={2}/>
//         )}

//         <OrbitControls enabled={controlsEnabled}/>

//       </Canvas>

//     </div>
//   )
// }
