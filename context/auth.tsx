"use client"

import { auth } from '@/firebase/client'
import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth'
import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

type AuthContextType = {
  currentUser: User | null
  logout: () => Promise<void>
  loginWithGoogle: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user ?? null)
    })
    return () => unsubscribe()
  }, [])

  const logout = async () => await auth.signOut()

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider)
  }

  const value = {
    currentUser,
    logout,
    loginWithGoogle
  }

  return <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)