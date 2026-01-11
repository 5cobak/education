import { memo, useCallback } from 'react';
import s from './index.scss';

import { useDispatch, useSelector } from 'react-redux';
import { articlesPageActions } from 'src/pages/ArticlesPage/modal/articlesSlice';
import { fetchArticles } from 'src/pages/ArticlesPage/modal/services/fetchArticles/fetchArticles.asynk';
import { TextField } from 'src/shared/ui/TextField';
import { selectArticlesSearch } from 'src/pages/ArticlesPage/modal/selectors/selectArticlesSearch/selectArticlesSearch';
import { useTranslation } from 'react-i18next';
import { useDebounce } from 'src/shared/hooks/useDebounce';

export const SearchArticles = memo(() => {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const search = useSelector(selectArticlesSearch);
    const fetchData = useCallback(() => {
        dispatch(fetchArticles({ isReplace: true }));
    }, [dispatch]);

    const debouncedFetchArticles = useDebounce(fetchData, 500);

    const onSearchArticles = useCallback(
        (value: string) => {
            dispatch(articlesPageActions.setSearch(value));
            dispatch(articlesPageActions.setPage(1));
            debouncedFetchArticles();
        },
        [dispatch, debouncedFetchArticles]
    );

    return (
        <div className={s.container}>
            <TextField value={search} changeHandler={onSearchArticles} placeholder={t('input_search')} />
        </div>
    );
});

SearchArticles.displayName = 'SearchArticles';
