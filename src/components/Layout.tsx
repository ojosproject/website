// Layout.tsx
// Ojos Project
import Header from './Header'
import Footer from './Footer'

export default function Layout( {children}: {children: any} ) {
    return (
      <>
        <Header />
        {children}
        <Footer />
      </>
    )
}