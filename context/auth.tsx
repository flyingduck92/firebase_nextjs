"use client"

import { auth } from '@/firebase/client'
import { User } from 'firebase/auth'
import { createContext, useContext, useEffect, useState } from 'react'

type AuthContextType = {
  currentUser: User | null
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthContextProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user ?? null)
    })
    return () => unsubscribe()
  }, [])

  const value = {
    currentUser,
  }

  return <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)