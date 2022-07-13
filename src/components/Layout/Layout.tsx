import { ReactNode } from 'react'

import { Header } from 'src/components'

interface LayoutProps {
  children?: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="container mx-auto max-w-4xl flex-1">{children}</div>
    </div>
  )
}
