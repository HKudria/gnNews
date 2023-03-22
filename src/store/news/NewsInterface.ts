export interface INews {
    source: {
        id: string,
        name: string
    }
    author: string;
    title: string;
    description?: string;
    url: string;
    urlToImage?: string;
    publishedA: string;
    content?: string;
}

export interface NewsState {
    news: INews[] | [];
    status: string;
    count: number;
}



