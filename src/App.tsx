// App.tsx
// Ojos Project
// 
// This will act as the index of the app.
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function Layout( {children}: {children: any} ) {
    return (
      <>
        <Header />
        {children}
        <Footer />
      </>
    )
}

function App() {
  return (
    <Layout>
      <p>Test!</p>
    </Layout>
  )
}

export default App
