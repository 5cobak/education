import { memo, useCallback, useMemo } from 'react';
import s from './index.scss';
import { Option, Select } from 'src/shared/ui/Select';
import { useTranslation } from 'react-i18next';
import { SortOrder } from 'src/shared/types';
import { ArticlesSortField } from 'src/pages/ArticlesPage/types';
import { useDispatch, useSelector } from 'react-redux';
import { selectSortField } from '../../../modal/selectors/selectFilters/selectFilters';
import { selectSortOrder } from '../../../modal/selectors/selectFilters/selectFilters';
import { articlesPageActions } from 'src/pages/ArticlesPage/modal/articlesSlice';
import { fetchArticles } from 'src/pages/ArticlesPage/modal/services/fetchArticles/fetchArticles.asynk';

export const SortArticles = memo(() => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const sortField = useSelector(selectSortField);
    const sortOrder = useSelector(selectSortOrder);

    const fieldOptions: Option<ArticlesSortField>[] = useMemo(
        () => [
            { value: 'createdAt', label: t('sort_articles_date') },
            { value: 'views', label: t('sort_articles_views') },
            { value: 'title', label: t('sort_articles_title') },
        ],
        [t]
    );
    const orderOptions: Option<SortOrder>[] = useMemo(
        () => [
            { value: 'asc', label: t('sort_articles_asc') },
            { value: 'desc', label: t('sort_articles_desc') },
        ],
        [t]
    );

    const onChangeSortField = useCallback(
        (value: ArticlesSortField) => {
            dispatch(articlesPageActions.setSortField(value));
            dispatch(articlesPageActions.setPage(1));
            dispatch(fetchArticles({ isReplace: true }));
        },
        [dispatch]
    );
    const onChangeSortOrder = useCallback(
        (value: SortOrder) => {
            dispatch(articlesPageActions.setSortOrder(value));
            dispatch(articlesPageActions.setPage(1));
            dispatch(fetchArticles({ isReplace: true }));
        },
        [dispatch]
    );

    return (
        <div className={s.container}>
            <Select options={fieldOptions} value={sortField} customLabel={t('sort_by')} onChange={onChangeSortField} />
            <Select options={orderOptions} value={sortOrder} customLabel={t('sort_by')} onChange={onChangeSortOrder} />
        </div>
    );
});

SortArticles.displayName = 'SortArticles';
