import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { GlobalState } from 'src/app/providers/StoreProvider';
import { fetchArticles } from './services/fetchArticles/fetchArticles.asynk';
import { ArticleData } from 'src/entities/Article';
import { ArticlesPageState, ArticlesSortField } from '../types';
import { ViewType } from 'src/features/ViewToggler';
import { SortOrder } from 'src/shared/types';

const initialState: ArticlesPageState = {
    hasMore: true,
    view: 'small',
    ids: [],
    entities: {},
    sortField: 'createdAt',
    sortOrder: 'asc',
    search: '',
};

const articlesAdapter = createEntityAdapter<ArticleData>();

export const articlesSlice = createSlice({
    name: 'articlesPage',
    initialState: articlesAdapter.getInitialState(initialState),
    reducers: {
        initArticlesPage: (state, action: PayloadAction<URLSearchParams>) => {
            state.search = action.payload.get('search') ?? '';
            state.sortField = (action.payload.get('sortField') as ArticlesSortField) ?? 'createdAt';
            state.sortOrder = (action.payload.get('sortOrder') as SortOrder) ?? 'asc';
        },
        setView: (state, action: PayloadAction<ViewType>) => {
            state.view = action.payload;
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setSortField: (state, action: PayloadAction<ArticlesSortField>) => {
            state.sortField = action.payload;
        },
        setSortOrder: (state, action: PayloadAction<SortOrder>) => {
            state.sortOrder = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending, (state, action) => {
                state.isLoading = true;
                state.error = undefined;

                if (action.meta.arg.isReplace) {
                    articlesAdapter.removeAll(state);
                }
            })
            .addCase(fetchArticles.fulfilled, (state, action) => {
                state.isLoading = false;
                let limit;
                if (state.view === 'small') {
                    limit = 6;
                } else {
                    limit = 2;
                }

                if (action.meta.arg.isReplace) {
                    articlesAdapter.setAll(state, action.payload);
                } else {
                    articlesAdapter.addMany(state, action.payload);
                }
                state.hasMore = action.payload.length >= limit;
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

export const articlesPageActions = articlesSlice.actions;

const articlesPageReducer = articlesSlice.reducer;

export default articlesPageReducer;
