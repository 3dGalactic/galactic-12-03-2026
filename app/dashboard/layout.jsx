// 'use client'

// import { supabase } from '../lib/supabaseClient'
// import { useRouter } from 'next/navigation'

// export default function DashboardPage() {
//   const router = useRouter()

//   return (
//     <div className="min-h-screen bg-black text-white px-10 py-8">
      
//       {/* Header */}
//       <div className="flex justify-between items-center mb-10">
//         <div>
//           <h1 className="text-3xl font-bold">Welcome back 👋</h1>
//           <p className="text-zinc-400 mt-1">
//             Upload a model to get instant manufacturing insights
//           </p>
//         </div>

//         <button
//           className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition font-medium"
//         >
//           Upload STL
//         </button>
//       </div>

//       {/* Stats */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
//         {[
//           { label: 'Models Uploaded', value: '0' },
//           { label: 'Quotes Generated', value: '0' },
//           { label: 'Orders Placed', value: '0' },
//           { label: 'Active Jobs', value: '0' },
//         ].map((stat) => (
//           <div
//             key={stat.label}
//             className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
//           >
//             <p className="text-zinc-400 text-sm">{stat.label}</p>
//             <p className="text-3xl font-bold mt-2">{stat.value}</p>
//           </div>
//         ))}
//       </div>

//       {/* Recent Activity */}
//       <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 mb-10">
//         <h2 className="text-xl font-semibold mb-4">Recent Models</h2>

//         <div className="text-zinc-400 text-sm">
//           No models uploaded yet.
//         </div>

//         {/* Placeholder row (for future) */}
//         {/* 
//         <div className="flex justify-between py-3 border-b border-zinc-800">
//           <span>bracket_v2.stl</span>
//           <span className="text-zinc-400">FDM • Quoted</span>
//         </div>
//         */}
//       </div>

//       {/* Shortcuts */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//         {[
//           'FDM Printing',
//           'SLS Printing',
//           'Material Guide',
//           'Design Guidelines',
//         ].map((item) => (
//           <div
//             key={item}
//             className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 hover:border-indigo-600 transition cursor-pointer"
//           >
//             <p className="font-medium">{item}</p>
//             <p className="text-zinc-400 text-sm mt-1">
//               Learn more →
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Footer */}
//       <div className="mt-12 flex justify-end">
//         <button
//           onClick={async () => {
//             await supabase.auth.signOut({ scope:'global'})
//             router.replace('/auth')
//           }}
//           className="text-zinc-400 hover:text-white text-sm"
//         >
//           Logout
//         </button>
//       </div>
//     </div>
//   )
// }




'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../lib/supabaseClient'

export default function DashboardLayout({ children }) {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()

      if (!session) {
        router.replace('/auth')
      } else {
        setLoading(false)
      }
    }

    checkSession()
  }, [router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Checking authentication…
      </div>
    )
  }

  return <>{children}</>
}
