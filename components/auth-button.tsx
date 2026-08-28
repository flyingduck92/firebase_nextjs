"use client"

import { useAuth } from '@/context/auth'
import Link from 'next/link'

function AuthButton() {
  const auth = useAuth()

  return (
    <div>
      {!!auth?.currentUser &&
        <div>
          <div>{auth.currentUser.email}</div>
          <div onClick={() => auth.logout()}>Logout</div>
        </div>
      }
      {!auth?.currentUser &&
        <div>
          <Link href="/login" >Login</Link>
          <Link href="/signup" >SignUp</Link>
        </div>
      }
    </div>
  )

}

export default AuthButton
