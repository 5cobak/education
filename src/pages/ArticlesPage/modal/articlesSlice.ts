import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { GlobalState } from 'src/app/providers/StoreProvider';
import { fetchAllArticles } from './services/fetchAllArticles/fetchAllArticles.asynk';
import { ArticleData } from 'src/entities/Article';
import { ArticlesPageState } from '../types';

const initialState: ArticlesPageState = {
    ids: [],
    entities: {},
};

const articlesAdapter = createEntityAdapter<ArticleData>();

export const articlesSlice = createSlice({
    name: 'articlesPage',
    initialState: articlesAdapter.getInitialState(initialState),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllArticles.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchAllArticles.fulfilled, (state, action: PayloadAction<ArticleData[]>) => {
                state.isLoading = false;
                articlesAdapter.setAll(state, action.payload);
            })
            .addCase(fetchAllArticles.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const articlesPageSelector = articlesAdapter.getSelectors<GlobalState>(
    (state) => state.articlesPage || articlesAdapter.getInitialState()
);

export const articlePageActions = articlesSlice.actions;

const articlesPageReducer = articlesSlice.reducer;

export default articlesPageReducer;
