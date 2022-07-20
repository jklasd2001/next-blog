import { ReactNode } from 'react'

import { Header } from 'src/components'

interface LayoutProps {
  children?: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="mx-auto w-full max-w-6xl flex-1 py-10">{children}</div>
    </div>
  )
}
