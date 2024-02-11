// news.tsx
// Ojos Project
// 
// Controls the "News" aspect of the website.
import { useLoaderData } from "react-router-dom";
import { getNewsContent, NewsArticle } from "./backend";
import Markdown from 'react-markdown';
import Layout from "../../components/Layout";
import "../../styles/newsWithId.css"

export async function loader({ params }: { params: {newsId: string} }) {
  const news = await getNewsContent(params.newsId);
  return { news };
}

export default function News() {
  // Not quite sure why "news" is in red at the moment
  const { news }: {news: NewsArticle} = useLoaderData();

  return (
    <Layout>
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
