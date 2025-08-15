import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleDetailsCommentsState } from './types';
import { CommentType } from 'src/entities/Comment';
import { GlobalState } from 'src/app/providers/StoreProvider';
import { fetchCommentsByArticleId } from './services/fetchArticleComments/fetchArticleComments.asynk';
import { addNewComment } from './services/addNewComment/addNewComment.asynk';

const initialState: ArticleDetailsCommentsState = {
    _initialed: false,
    ids: [],
    entities: {},
};

const commentsAdapter = createEntityAdapter<CommentType>({
    selectId: (comment) => comment.id,
});

export const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsComments',
    initialState: commentsAdapter.getInitialState(initialState),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<CommentType[]>) => {
                state.isLoading = false;
                commentsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(addNewComment.pending, (state) => {
                state.isLoading = true;
                state.commentsError = undefined;
            })
            .addCase(addNewComment.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(addNewComment.rejected, (state, action) => {
                state.isLoading = false;
                state.commentsError = action.payload;
            });
    },
});

export const articleDetailsCommentsSelectors = commentsAdapter.getSelectors<GlobalState>(
    (state) => state.articleDetailsComments || commentsAdapter.getInitialState()
);

export const articleDetailsCommentsActions = articleDetailsCommentsSlice.actions;

const articleDetailsCommentsReducer = articleDetailsCommentsSlice.reducer;

export default articleDetailsCommentsReducer;
