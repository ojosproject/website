// news.tsx
// Ojos Project
// 
// Controls the "News" aspect of the website.
import { useLoaderData } from "react-router-dom";
import { NewsArticle } from "./backend";
import Markdown from 'react-markdown';
import Layout from "../../components/Layout";
import "../../styles/newsWithId.css"

function getDate(date: number) {
  return new Date(date*1000).toLocaleDateString("PST", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  })
}

export default function News() {
  // * Loader function can be found in
  // * /src/main.tsx
  const { news } = useLoaderData() as {news: NewsArticle};
  let date_label = <blockquote>⚠️ THIS IS A DRAFT.<br/><br/>Information in this article may or may not be accurate and is subject to change.</blockquote>
  let updated_label = null;

  if (news.date !== 0) {
    // If the date is 0, it means it has not been published and is a draft.
    date_label = <p>{getDate(news.date)}</p>
  }

  if (news.updated !== 0) {
    updated_label = <p>(updated {getDate(news.updated)})</p>
  }

  return (
      <Layout>

      <div className="join-us-body">
        <div className="join-us-container">
          <h1>{news.title}</h1>

          {date_label}
          {updated_label}
          <a className="news-author-container" target="_blank" rel="noopener noreferrer" href={"mailto:"+news.author.email}>
            <img src={`https://gravatar.com/avatar/${news.author.email_sha}?s=50&d=mp`}/> by {news.author.name}
          </a>
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
