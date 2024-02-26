// newsWithoutId.tsx
// Ojos Project
// 
// Controls the "News" aspect of the website.
import { NewsArticle } from "./backend";
import Layout from "../../components/Layout";
import "../../styles/newsWithId.css"
import newsStand from '../../data/metadata.json'

function ClickableNews(props: NewsArticle) {
    let date_label = <blockquote>⚠️ THIS IS A DRAFT.<br/><br/>Information in this article may or may not be accurate and is subject to change.</blockquote>

    if (props.date !== 0) {
      // If the date is 0, it means it has not been published and is a draft.
      date_label = <p>{new Date(props.date*1000).toLocaleDateString("PST", {
        day: "2-digit",
        month: "long",
        year: "numeric"
      })}</p>
    }
    return <a href={"/news/"+props.id+"/"} className="news-stand-article">
        <img src={props.imageLocation} width="200"/>
        <div>
            <h3><span className="article-title">{props.title}</span> by {props.author}</h3>
            {date_label}
            
            <p>{props.description}</p>
        </div>
    </a>
}

export default function NewsStand() {
  return (
      <Layout>

      <div className="join-us-body">
        {
            Object.values(newsStand).sort((a, b) => b.date - a.date).map(value => {
                return <ClickableNews {...value} />
            })
        }
      </div>
    </Layout>
  )
}
