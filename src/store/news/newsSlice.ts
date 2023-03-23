import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {NewsState, ViewEnums} from './NewsInterface';

import {RootState} from '../store';

const apiKey = '0a2b183099ad494e8a53d859c344105f'


const initialState: NewsState = {
    news: [],
    status: 'loading',
    count: 0,
    view: ViewEnums.BLOCK
};

export const parseNews = createAsyncThunk('products/fetchProducts', async (country: string) => {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`);
    return await response.json();
});


export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        changeView(state) {
            state.view = state.view === ViewEnums.BLOCK ? ViewEnums.LIST : ViewEnums.BLOCK
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(parseNews.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(parseNews.fulfilled, (state, action) => {
                state.status = 'idle';
                state.news = action.payload.articles;
                state.count = action.payload.articles.length;
            })
            .addCase(parseNews.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const {changeView} = newsSlice.actions;

export const getNewsState = (state: RootState): NewsState => state.news;

export default newsSlice.reducer;
