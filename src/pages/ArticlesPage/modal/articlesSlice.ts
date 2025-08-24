import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { GlobalState } from 'src/app/providers/StoreProvider';
import { fetchArticles } from './services/fetchArticles/fetchArticles.asynk';
import { ArticleData } from 'src/entities/Article';
import { ArticlesPageState } from '../types';
import { ViewType } from 'src/features/ViewToggler';

const initialState: ArticlesPageState = {
    hasMore: true,
    view: 'small',
    ids: [],
    entities: {},
};

const articlesAdapter = createEntityAdapter<ArticleData>();

export const articlesSlice = createSlice({
    name: 'articlesPage',
    initialState: articlesAdapter.getInitialState(initialState),
    reducers: {
        setView: (state, action: PayloadAction<ViewType>) => {
            state.view = action.payload;
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchArticles.fulfilled, (state, action: PayloadAction<ArticleData[]>) => {
                state.isLoading = false;
                articlesAdapter.addMany(state, action.payload);
                state.hasMore = action.payload.length > 0;
            })
            .addCase(fetchArticles.rejected, (state, action) => {
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
