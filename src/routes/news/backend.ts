// backend.ts
// Ojos Project
//
// Gathers news content from the back!


export interface NewsArticle {
    title: string,
    author: string,
    date: number,
    id: string,
    contentInMarkdown?: string,
    description: string
    imageLocation?: string
}

export async function getNewsContent(fromId: string): Promise<NewsArticle> {
    let metadata = await (await fetch(`/static/data/metadata.json`)).json()
    let content = (await (await fetch(`/static/data/${fromId}.md`)).text())

    if (content.startsWith("# ")) {
        content = content.split("\n").slice(2).join("\n")
    }
    
    return {
        title: metadata[fromId].title,
        author: metadata[fromId].author,
        date: metadata[fromId].date,
        id: fromId,
        description: metadata[fromId].description,
        imageLocation: metadata[fromId].imageLocation,
        contentInMarkdown: content
    }
}
