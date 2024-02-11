// backend.ts
// Ojos Project
//
// Gathers news content from the back!


export interface NewsArticle {
    title: string,
    author: string,
    date: number,
    id: string,
    contentInMarkdown: string,
    description: string
    imageLocation?: string
}

export async function getNewsContent(fromId: string): Promise<NewsArticle> {
    let metadata = await (await fetch(`/static/data/${fromId}.json`)).json()
    let content = (await (await fetch(`/static/data/${fromId}.md`)).text())

    if (content.startsWith("# ")) {
        content = content.split("\n").slice(2).join("\n")
    }
    
    return {
        title: metadata.title,
        author: metadata.author,
        date: metadata.date,
        id: metadata.id,
        description: metadata.description,
        imageLocation: metadata.imageLocation,
        contentInMarkdown: content
    }
}
