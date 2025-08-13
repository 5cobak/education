import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'src/app/providers/StoreProvider';
import { ApiError } from 'src/shared/api';
import { CommentType } from 'src/entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<
    CommentType[],
    string | undefined,
    ThunkConfig<ApiError.SERVER_ERROR | string>
>('articleDetailsComments/fetchCommentsByArticleId', async (articleId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
        const response = await extra.$Axios.get<CommentType[]>('/comments', {
            params: {
                articleId,
                _expand: 'user',
            },
        });

        if (!response.data) {
            throw new Error('data fetch is not found');
        }

        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue(ApiError.SERVER_ERROR);
    }
});
