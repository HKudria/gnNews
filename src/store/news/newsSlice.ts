import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {LanguageEnums, LoadingStatusEnum, NewsState, ViewEnums} from './NewsInterface';

import {RootState} from '../store';

const apiKey = '0a2b183099ad494e8a53d859c344105f'


const initialState: NewsState = {
    news: [],
    status: LoadingStatusEnum.LOADING,
    count: 0,
    view: ViewEnums.BLOCK,
    language: LanguageEnums.EN,
};

export const parseNews = createAsyncThunk('products/fetchProducts', async (country: string, {rejectWithValue}) => {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`);
    const data = await response.json();
    if (data.status === 'ok') {
        return await data;
    }
    return rejectWithValue(data.code);
});


export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        setView(state) {
            state.view = state.view === ViewEnums.BLOCK ? ViewEnums.LIST : ViewEnums.BLOCK
        },
        setLanguage(state) {
            state.language = state.language === LanguageEnums.EN ? LanguageEnums.PL : LanguageEnums.EN
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(parseNews.pending, (state) => {
                state.status = LoadingStatusEnum.LOADING;
            })
            .addCase(parseNews.fulfilled, (state, action) => {
                state.status = LoadingStatusEnum.IDLE;
                state.news = action.payload.articles;
                state.count = action.payload.articles.length;
            })
            .addCase(parseNews.rejected, (state) => {
                state.status = LoadingStatusEnum.FAILED;
            });
    },
});

export const {setView, setLanguage} = newsSlice.actions;

export const getNewsState = (state: RootState): NewsState => state.news;

export default newsSlice.reducer;
