// App.jsx
// Ojos Project
// 
// App entry.

import './App.css';
import logo from './static/logo.png'
import Layout from './Layout'

function App() {
  return (
    <Layout>
      <div className="photo_container">
        <img src={logo} alt="The logo of the Ojos Project" width="350" height="350"></img>
        <a href="https://markbaldw.in/url/" target="_blank" rel="noopener noreferrer">a uci research project</a>
      </div>
      
    </Layout>
  );
}

export default App;
