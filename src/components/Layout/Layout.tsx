import { ReactNode } from 'react'

import { Footer, Header } from 'src/components'

interface LayoutProps {
  children?: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="container mx-auto flex-1">{children}</div>
      <Footer />
    </div>
  )
}
