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
    let c: NewsArticle = await (await fetch(`/static/json/${fromId}.json`)).json()
    
    return c
}
