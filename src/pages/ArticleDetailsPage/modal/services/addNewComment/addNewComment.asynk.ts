import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'src/app/providers/StoreProvider';
import { ApiError } from 'src/shared/api';
import { CommentType } from 'src/entities/Comment';
import { selectArticleData } from 'src/entities/Article/model/selectors/selectArticleData/selectArticleData';
import { selectUserId } from 'src/entities/User/model/selectors/selectUserId/selectUserId';
import { fetchCommentsByArticleId } from '../fetchArticleComments/fetchArticleComments.asynk';

export const addNewComment = createAsyncThunk<
    CommentType,
    string | undefined,
    ThunkConfig<ApiError.SERVER_ERROR | string>
>('articleDetailsComments/addNewComment', async (text, thunkAPI) => {
    const { extra, rejectWithValue, getState, dispatch } = thunkAPI;

    const article = selectArticleData(getState());
    const userId = selectUserId(getState());

    if (!article || !text || !userId) {
        return rejectWithValue('article is not found');
    }

    try {
        const response = await extra.$Axios.post<CommentType>('/comments', {
            articleId: article.id,
            userId,
            text,
        });

        if (!response.data) {
            throw new Error('data fetch is not found');
        }

        dispatch(fetchCommentsByArticleId(article.id));

        return response.data;
    } catch (e) {
        return rejectWithValue(ApiError.SERVER_ERROR);
    }
});
