// Layout.jsx
// Ojos Project
// 
// Includes the header and the footer for the website.
import './Layout.css'

function Header() {
    return (
      <div className="header">
        <p>This website is under construction and may not work as expected.</p>
      </div>
    )
  }
  
function Footer() {
  return (
    <div className='footer'>
      <p id="footer_message">ojos means eyes, named after my grandma's nickname for me: <a href="https://translate.google.com/?sl=es&tl=en&text=mis+ojos" target="_blank" rel="noopener noreferrer">mis ojos</a></p>
    </div>
  )
}

function Layout({children}: any) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout;