// newsWithoutId.tsx
// Ojos Project
// 
// Controls the "News" aspect of the website.
import { NewsArticle } from "./backend";
import Layout from "../../components/Layout";
import "../../styles/newsWithId.css"
import newsStand from '../../../public/static/data/metadata.json'

function ClickableNews(props: NewsArticle) {
    return <a href={"/news/"+props.id+"/"} className="news-stand-article">
        <img src={props.imageLocation} width="200"/>
        <div>
            <h3><span className="article-title">{props.title}</span> by {props.author}</h3>
            <p>{
                new Date(props.date*1000).toLocaleDateString("PST", {
                    day: "numeric",
                    month: 'short',
                    year: 'numeric'
                })
                }</p>
            
            <p>{props.description}</p>
        </div>
    </a>
}

export default function NewsStand() {
  return (
      <Layout>

      <div className="join-us-body">
        {
            Object.values(newsStand).sort((v) => v.date).reverse().map(value => {
                return <ClickableNews {...value} />
            })
        }
      </div>
    </Layout>
  )
}
