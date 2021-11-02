import React, { ReactNode } from 'react'
import Header from './Header/'

interface Props {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  )
}
