// news.tsx
// Ojos Project
// 
// Controls the "News" aspect of the website.
import { useLoaderData } from "react-router-dom";
import { getNewsContent, NewsArticle } from "./backend";
import Markdown from 'react-markdown';
import Layout from "../../components/Layout";
import "../../styles/newsWithId.css"
import { Helmet } from "react-helmet";

export async function loader({ params }: { params: {newsId: string} }) {
  const news = await getNewsContent(params.newsId);
  return { news };
}

export default function News() {
  const { news } = useLoaderData() as {news: NewsArticle};

  return (
      <Layout>

      <Helmet>
        <meta charSet="utf-8" />
        <link rel="icon" href="/static/images/favicon.ico" sizes="any"/>
        <link rel="icon" href="/static/images/favicon.svg" type="image/svg+xml"/>
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content={news.description}
        />
        <meta property="og:image"  content="https://ojos.calejvaldez.com/static/images/oembed.png"/>
        <meta name="twitter:image" content="https://ojos.calejvaldez.com/static/images/oembed.png"/>
        <title>{news.title} - Project News</title>
      </Helmet>

      <div className="join-us-body">
        <div className="join-us-container">
          <h1>{news.title}</h1>

          <p>by {news.author}</p>
          <p>{new Date(news.date*1000).toLocaleDateString("PST", {
            day: "2-digit",
            month: "long",
            year: "numeric"
          })}</p>
          <br></br>

          <div className="news-image">
            <img src={news.imageLocation}></img>
          </div>

          <p>{news.description}</p>

          <Markdown>{news.contentInMarkdown}</Markdown>
        </div>
      </div>
    </Layout>
  )
}
