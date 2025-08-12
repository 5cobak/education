import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'src/app/providers/StoreProvider';
import { ArticleData } from 'src/entities/Article/types';

import { ApiError } from 'src/shared/api';
import { articleActions } from '../../slice/articleSlice';

export const fetchArticle = createAsyncThunk<ArticleData, string, ThunkConfig<ApiError>>(
    'article/fetchArticle',
    async (id, thunkAPI) => {
        const { extra, rejectWithValue, dispatch } = thunkAPI;
        try {
            const response = await extra.$Axios.get<ArticleData>(`/articles/${id}`);

            dispatch(articleActions.setArticleData(response.data));

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue(ApiError.SERVER_ERROR);
        }
    }
);
