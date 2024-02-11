// Layout.tsx
// Ojos Project
import Header from './Header'
import Footer from './Footer'
import { ReactNode } from 'react'

export default function Layout( {children}: {children: ReactNode} ) {
    return (
      <>
        <Header />
        {children}
        <Footer />
      </>
    )
}