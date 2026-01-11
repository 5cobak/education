import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'src/app/providers/StoreProvider';

import { ApiError } from 'src/shared/api';

import { fetchArticles } from '../fetchArticles/fetchArticles.asynk';
import { selectArticlesPageIsLoading } from '../../selectors/selectArticlesPageIsLoading/selectArticlesPageIsLoading';
import { selectArticlesPageHasMore } from '../../selectors/selectArticlesPageHasMore/selectArticlesPageHasMore';
import { articlesPageActions } from '../../articlesSlice';
import { selectArticlesPagePage } from '../../selectors/selectArticlesPagePage/selectArticlesPagePage';

export const fetchNextArticles = createAsyncThunk<void, void, ThunkConfig<ApiError | string>>(
    'articlesPage/fetchNextArticles',
    async (_, thunkAPI) => {
        const { getState, dispatch } = thunkAPI;

        const isLoading = selectArticlesPageIsLoading(getState());
        const hasMore = selectArticlesPageHasMore(getState());
        const page = selectArticlesPagePage(getState());

        if (!hasMore || isLoading) {
            return;
        }

        dispatch(fetchArticles({}));
        dispatch(articlesPageActions.setPage(page + 1));
    }
);
