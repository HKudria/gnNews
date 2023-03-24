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
    view: ViewEnums;
    language: LanguageEnums;
}

export enum ViewEnums {
    LIST = 'List',
    BLOCK = 'Block',
}

export enum LoadingStatusEnum {
    LOADING = 'loading',
    FAILED = 'failed',
    IDLE = 'idle',
}

export enum LanguageEnums {
    PL = 'pl',
    EN = 'en',
}