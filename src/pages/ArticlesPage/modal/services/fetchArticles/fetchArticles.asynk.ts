import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'src/app/providers/StoreProvider';
import { ArticleData } from 'src/entities/Article';

import { ApiError } from 'src/shared/api';
import { selectArticlesPageView } from '../../selectors/selectArticlesPageView/selectArticlesPageView';
import { articlesPageActions } from '../../articlesSlice';
import { selectArticlesPagePage } from '../../selectors/selectArticlesPagePage/selectArticlesPagePage';
import { selectSortField, selectSortOrder } from '../../selectors/selectFilters/selectFilters';
import { selectArticlesSearch } from '../../selectors/selectArticlesSearch/selectArticlesSearch';
import { addQueryParams } from 'src/shared/lib/addQueryParams/addQueryParams';

interface FetchArticlesListProps {
    isReplace?: boolean;
}

export const fetchArticles = createAsyncThunk<ArticleData[], FetchArticlesListProps, ThunkConfig<ApiError | string>>(
    'articlesPage/fetchArticles',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;

        const page = selectArticlesPagePage(getState());
        const sortField = selectSortField(getState());
        const sortOrder = selectSortOrder(getState());
        const search = selectArticlesSearch(getState());
        const view = selectArticlesPageView(getState());

        let limit: number;

        if (view === 'small') {
            limit = 6;
        } else {
            limit = 2;
        }

        try {
            addQueryParams({ search, sortField, sortOrder });
            const response = await extra.$Axios.get<ArticleData[]>('/articles', {
                params: {
                    _page: page,
                    _limit: limit,
                    _expand: 'user',
                    _order: sortOrder,
                    _sort: sortField,
                    q: search,
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
