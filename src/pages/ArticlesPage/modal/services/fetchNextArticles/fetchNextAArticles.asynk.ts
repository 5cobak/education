import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'src/app/providers/StoreProvider';

import { ApiError } from 'src/shared/api';

import { fetchArticles } from '../fetchArticles/fetchArticles.asynk';
import { selectArticlesPagePage } from '../../selectors/selectArticlesPagePage/selectArticlesPagePage';
import { selectArticlesPageIsLoading } from '../../selectors/selectArticlesPageIsLoading/selectArticlesPageIsLoading';
import { selectArticlesPageHasMore } from '../../selectors/selectArticlesPageHasMore/selectArticlesPageHasMore';

export const fetchNextArticles = createAsyncThunk<void, void, ThunkConfig<ApiError | string>>(
    'articlesPage/fetchNextArticles',
    async (_, thunkAPI) => {
        const { getState, dispatch } = thunkAPI;
        const page = selectArticlesPagePage(getState());
        const isLoading = selectArticlesPageIsLoading(getState());
        const hasMore = selectArticlesPageHasMore(getState());

        if (!hasMore || isLoading) {
            return;
        }

        dispatch(fetchArticles({ page: page ? page + 1 : undefined }));
    }
);
