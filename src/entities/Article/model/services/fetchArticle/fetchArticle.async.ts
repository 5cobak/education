import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'src/app/providers/StoreProvider';
import { ArticleData } from 'src/entities/Article';

import { ApiError } from 'src/shared/api';
import { articleActions } from '../../slice/articleSlice';

export const fetchArticle = createAsyncThunk<ArticleData, string | undefined, ThunkConfig<ApiError | string>>(
    'article/fetchArticle',
    async (id, thunkAPI) => {
        const { extra, rejectWithValue, dispatch } = thunkAPI;
        try {
            if (!id) {
                return rejectWithValue('id is not defined');
            }
            const response = await extra.$Axios.get<ArticleData>(`/articles/${id}`, {
                params: {
                    _expand: 'user',
                },
            });

            dispatch(articleActions.setArticleData(response.data));

            return response.data;
        } catch (e) {
            return rejectWithValue(ApiError.SERVER_ERROR);
        }
    }
);
