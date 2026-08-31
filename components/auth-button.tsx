"use client"

import { useAuth } from '@/context/auth'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'

function AuthButton() {
  const auth = useAuth()

  return (
    <div>
      {!!auth?.currentUser && (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage
                src={auth.currentUser.photoURL as string}
                alt={`${auth.currentUser.displayName} avatar`}
                width={70}
                height={70}
              />
              <AvatarFallback>{(auth.currentUser.displayName || auth.currentUser.email)?.[0]}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-fit">
            <DropdownMenuGroup>
              <DropdownMenuLabel>
                <div>{auth.currentUser.displayName}</div>
                <div className="font-normal">{auth.currentUser.email}</div>
              </DropdownMenuLabel>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link href="/account">My Account</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/admin-dashboard">Admin Dashboard</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/account/favourites">My Favourites</Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => auth.logout()}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      )
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
