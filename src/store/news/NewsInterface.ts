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
    publishedAt: string;
    content?: string;
}

export interface NewsState {
    news: INews[] | [];
    status: LoadingStatusEnum;
    count: number;
    view: ViewEnums
}

export enum ViewEnums {
    LIST= 'List',
    BLOCK = 'Block'
}

export enum LoadingStatusEnum {
    LOADING= 'loading',
    FAILED = 'failed',
    IDLE = 'idle',
}