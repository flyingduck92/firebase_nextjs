import { ReactNode } from 'react'

export default function AuthLayout({ children }: { children: ReactNode }) {
  return <div className="max-w-160 p-5 mx-auto">
    {children}
  </div>
}