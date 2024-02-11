// join.tsx
// Ojos Project
import { Helmet } from "react-helmet";
import { Navigate } from "react-router-dom";

export default function Join() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="icon" href="/static/images/favicon.ico" sizes="any"/>
        <link rel="icon" href="/static/images/favicon.svg" type="image/svg+xml"/>
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="The Ojos Project is looking for people interested in research to join! We are a research project under UC Irvine professor Mark S. Baldwin's Undergraduate Research Lab. Whether you're experienced with Linux or are a fantastic writer, we'd love to have you! Take a look to see how you can help!"
        />
        <meta property="og:image"  content="https://ojos.calejvaldez.com/static/images/oembed.png"/>
        <meta name="twitter:image" content="https://ojos.calejvaldez.com/static/images/oembed.png"/>
        <title>🤝 Join the Ojos Project - Project News</title>
      </Helmet>
      <Navigate to="/news/join-us/"/>
    </> 
  )
}
