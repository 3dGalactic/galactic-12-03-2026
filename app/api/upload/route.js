// import { writeFile } from "fs/promises"
// import path from "path"
// import { NextResponse } from "next/server"

// export async function POST(req) {
//   try {
//     const formData = await req.formData()
//     const file = formData.get("file")

//     if (!file) {
//       return NextResponse.json(
//         { error: "No file uploaded" },
//         { status: 400 }
//       )
//     }

//     const bytes = await file.arrayBuffer()
//     const buffer = Buffer.from(bytes)

//     // save file in public/uploads
//     const uploadDir = path.join(process.cwd(), "public/uploads")
//     const filePath = path.join(uploadDir, file.name)

//     await writeFile(filePath, buffer)

//     return NextResponse.json({
//       message: "File uploaded successfully",
//       filename: file.name,
//     })

//   } catch (error) {
//     console.error(error)
//     return NextResponse.json(
//       { error: "Upload failed" },
//       { status: 500 }
//     )
//   }
// }




















import { supabase } from "../../lib/supabaseClient"



export async function POST(req) {
  try {
    const formData = await req.formData()

    const file = formData.get("file")
    const material = formData.get("material")
    const finish = formData.get("finish")
    const quantity = formData.get("quantity")
    // const priority = formData.get("priority")
    const instruction = formData.get("instruction")

    if (!file) {
      return Response.json({ message: "Please upload a file" }, { status: 400 })
    }

    // create unique file name
    const fileName = `${Date.now()}_${file.name}`

    // upload file to Supabase storage bucket
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("uploads")
      .upload(fileName, file)

    if (uploadError) {
      return Response.json({ message: uploadError.message }, { status: 500 })
    }

    // get public URL
    const { data: publicUrlData } = supabase.storage
      .from("uploads")
      .getPublicUrl(fileName)

    const fileUrl = publicUrlData.publicUrl

    // save record in database table
    const { error: dbError } = await supabase
      .from("uploads")
      .insert([
        {
          file_name: file.name,
          file_url: fileUrl,
          material,
          finish,
          quantity,
         
          instruction,
        },
      ])

    if (dbError) {
      return Response.json({ message: dbError.message }, { status: 500 })
    }

    return Response.json({
      message: "File uploaded successfully",
      fileUrl,
    })

  } catch (err) {
    return Response.json({ message: err.message }, { status: 500 })
  }
}
