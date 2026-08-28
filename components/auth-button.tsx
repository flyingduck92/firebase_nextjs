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
        <div className="flex gap-2 items-center">
          <Link className="uppercase hover:underline tracking-widest" href="/login" >Login</Link>
          <div className="h-8 w-px bg-white/50"></div>
          <Link className="uppercase hover:underline tracking-widest" href="/signup" >SignUp</Link>
        </div>
      }
    </div>
  )

}

export default AuthButton
