'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../lib/supabaseClient'

export default function AuthPage() {
  const router = useRouter()

  const [isSignup, setIsSignup] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
  const {
    data: { subscription },
  } = supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_IN' && session) {
      router.replace('/dashboard')
    }
  })

  return () => subscription.unsubscribe()
}, [router])


  // ✅ HARD session check (handles email confirmation redirect)
//   useEffect(() => {
//     const checkSession = async () => {
//       const {
//         data: { session },
//       } = await supabase.auth.getSession()

//       if (session) {
//         router.replace('/dashboard')
//       }
//     }

//     checkSession()
//   }, [router])

  const handleEmailAuth = async () => {
    setLoading(true)
    setMessage('')

    if (isSignup) {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${location.origin}/auth`,
        },
      })

      if (error) {
        setMessage(error.message)
      } else if (data.session) {
        // Email confirmation OFF
        router.replace('/dashboard')
      } else {
        // Email confirmation ON
        setMessage('Check your email to confirm your account.')
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        setMessage(error.message)
      } else {
        router.replace('/dashboard')
      }
    }

    setLoading(false)
  }

  const oauthLogin = async (provider) => {
    await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${location.origin}/auth`,
      },
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-md p-8 rounded-2xl bg-zinc-900 border border-zinc-800">
        <h1 className="text-3xl font-bold text-center mb-2">
          {isSignup ? 'Create an account' : 'Welcome back'}
        </h1>

        {message && (
          <p className="text-center text-sm text-zinc-400 mb-4">
            {message}
          </p>
        )}

        {/* OAuth */}
        <div className="space-y-3 mb-6">
          <button
            onClick={() => oauthLogin('google')}
            className="w-full py-3 rounded-xl bg-white text-black"
          >
            Continue with Google
          </button>

          <button
            onClick={() => oauthLogin('github')}
            className="w-full py-3 rounded-xl bg-zinc-800"
          >
            Continue with GitHub
          </button>
        </div>

        <input
          className="w-full mb-3 px-4 py-3 bg-zinc-800 rounded-xl"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full mb-4 px-4 py-3 bg-zinc-800 rounded-xl"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleEmailAuth}
          disabled={loading}
          className="w-full py-3 rounded-xl bg-indigo-600"
        >
          {loading
            ? 'Please wait...'
            : isSignup
            ? 'Create account'
            : 'Sign in'}
        </button>

        <p className="text-center text-sm text-zinc-400 mt-4">
          {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            onClick={() => setIsSignup(!isSignup)}
            className="underline"
          >
            {isSignup ? 'Sign in' : 'Sign up'}
          </button>
        </p>
      </div>
    </div>
  )
}
