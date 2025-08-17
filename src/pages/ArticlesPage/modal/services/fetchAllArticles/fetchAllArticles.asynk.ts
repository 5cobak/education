import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'src/app/providers/StoreProvider';
import { ArticleData } from 'src/entities/Article';

import { ApiError } from 'src/shared/api';

export const fetchAllArticles = createAsyncThunk<ArticleData[], void, ThunkConfig<ApiError | string>>(
    'articlesPage/fetchAllArticles',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;
        try {
            const response = await extra.$Axios.get<ArticleData[]>('/articles', {
                params: {
                    _expand: 'user',
                },
            });

            if (!response.data) {
                throw Error('data is not defined');
            }

            return response.data;
        } catch (e) {
            return rejectWithValue(ApiError.SERVER_ERROR);
        }
    }
);
