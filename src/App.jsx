// App.jsx
// Ojos Project
// 
// App entry.

import './App.css';
import logo from './static/logo.png'
import grandma from "./static/grandma.jpg"
import Layout from './Layout'

function App() {
  return (
    <Layout>
      <div className="photo_container">
        <img src={logo} alt="The logo of the Ojos Project" width="350" height="350"></img>
        <a href="https://markbaldw.in/url/" target="_blank" rel="noopener noreferrer">a uci research project</a>
      </div>

      <div className="story">
        <div id="story_text">
          <h1>Creating an easier way to stay connected with who you love.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam aliquam sem et tortor consequat id porta nibh. Diam ut venenatis tellus in metus vulputate eu scelerisque. Lorem ipsum dolor sit amet.</p>
        </div>
        <img id="story_image" src={grandma}></img>
      </div>

      <div className="our_team">
        
      </div>
      
    </Layout>
  );
}

export default App;
