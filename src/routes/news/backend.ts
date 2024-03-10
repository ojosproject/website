// backend.ts
// Ojos Project
//
// Gathers news content from the back!
import metadata from "../../data/metadata.json"

export interface NewsArticle {
    title: string,
    author: {name: string, email: string, email_sha: string},
    date: number,
    updated: number,
    id: string,
    contentInMarkdown?: string,
    description: string
    imageLocation?: string
}

export async function getNewsContent(fromId: string): Promise<NewsArticle> {
    let content = (await (await fetch(`/static/data/${fromId}.md`)).text())

    if (content.startsWith("# ")) {
        content = content.split("\n").slice(2).join("\n")
    }
    
    return {
        title: Object(metadata)[fromId].title,
        author: Object(metadata)[fromId].author,
        date: Object(metadata)[fromId].date,
        id: fromId,
        updated: Object(metadata)[fromId].updated,
        description: Object(metadata)[fromId].description,
        imageLocation: Object(metadata)[fromId].imageLocation,
        contentInMarkdown: content
    }
}
