import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'src/app/providers/StoreProvider';
import { ArticleData } from 'src/entities/Article';

import { ApiError } from 'src/shared/api';
import { selectArticlesPageView } from '../../selectors/selectArticlesPageView/selectArticlesPageView';
import { articlePageActions } from '../../articlesSlice';

interface FetchArticlesListProps {
    page?: number;
}

export const fetchArticles = createAsyncThunk<ArticleData[], FetchArticlesListProps, ThunkConfig<ApiError | string>>(
    'articlesPage/fetchArticles',
    async (args, thunkAPI) => {
        const { extra, rejectWithValue, getState, dispatch } = thunkAPI;
        const { page = 1 } = args;

        const view = selectArticlesPageView(getState());
        let limit: number;

        if (view === 'small') {
            limit = 6;
        } else {
            limit = 2;
        }

        try {
            const response = await extra.$Axios.get<ArticleData[]>('/articles', {
                params: {
                    _page: page,
                    _limit: limit,
                    _expand: 'user',
                },
            });

            dispatch(articlePageActions.setPage(page));

            if (!response.data) {
                throw Error('data is not defined');
            }

            return response.data;
        } catch (e) {
            return rejectWithValue(ApiError.SERVER_ERROR);
        }
    }
);
