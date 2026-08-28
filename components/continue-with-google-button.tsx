'use client'

import { Button } from './ui/button'
import { useAuth } from '@/context/auth'

function ContinueWithGoogleButton() {
  const auth = useAuth()

  return <Button onClick={() => auth?.loginWithGoogle()}>
    Continue with Google
  </Button >
}

export { ContinueWithGoogleButton }