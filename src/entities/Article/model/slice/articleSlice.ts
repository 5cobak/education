import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleData, ArticleState } from '../../types';
import { fetchArticle } from '../services/fetchArticle/fetchArticle.async';

export const initialState: ArticleState = {
    _initialed: false,
};

export const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        setArticleData: (state, action: PayloadAction<ArticleData>) => {
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticle.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticle.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
                state._initialed = true;
            })
            .addCase(fetchArticle.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                state._initialed = true;
            });
    },
});

export const articleActions = articleSlice.actions;

const articleReducer = articleSlice.reducer;

export default articleReducer;
