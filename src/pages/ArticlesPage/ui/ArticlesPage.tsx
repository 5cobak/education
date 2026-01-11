import { useLayReducer } from 'src/shared/hooks/useLazyReducer';
import { ArticlesList } from './components/ArticlesList/ArticlesList';
import articlesPageReducer, { articlesPageActions, articlesPageSelector } from '../modal/articlesSlice';
import { useInitEffect } from 'src/shared/hooks/useInitEffect';
import { useDispatch, useSelector } from 'react-redux';
import { ViewToggler, ViewType } from 'src/features/ViewToggler';
import { Page } from 'src/shared/ui/Page';
import { selectArticlesPageView } from '../modal/selectors/selectArticlesPageView/selectArticlesPageView';
import { useCallback } from 'react';
import { fetchNextArticles } from '../modal/services/fetchNextArticles/fetchNextAArticles.asynk';
import { LOCAL_STORAGE_ARTICLES_VIEW } from 'src/shared/api/model/consts';
import { SortArticles } from './components/SortArticles/SortArticles';
import { SearchArticles } from './components/SearchArticles/SearchArticles';
import s from './index.scss';
import { useSearchParams } from 'react-router-dom';

const ARTICLES_PAGE_SCROLL_POSITION = 'ARTICLES_PAGE_SCROLL_POSITION';

const ArticlesPage = () => {
    useLayReducer('articlesPage', articlesPageReducer);
    const dispatch = useDispatch();
    const articles = useSelector(articlesPageSelector.selectAll);
    const view = useSelector(selectArticlesPageView);
    const [params] = useSearchParams();

    useInitEffect(() => {
        const view = localStorage.getItem(LOCAL_STORAGE_ARTICLES_VIEW);
        if (view) {
            dispatch(articlesPageActions.setView(JSON.parse(view) as ViewType));
        }
        dispatch(articlesPageActions.initArticlesPage(params));
    });

    const onChangeView = (view: ViewType) => {
        dispatch(articlesPageActions.setView(view));
        localStorage.setItem(LOCAL_STORAGE_ARTICLES_VIEW, JSON.stringify(view));
    };

    const fetchArticles = useCallback(() => {
        dispatch(fetchNextArticles());
    }, [dispatch]);

    if (!view) {
        return null;
    }

    return (
        <Page storageKey={ARTICLES_PAGE_SCROLL_POSITION} callback={fetchArticles}>
            <div className={s.articlesHead}>
                <SortArticles />
                <ViewToggler initialView={view} onChange={onChangeView} />
            </div>

            <div className={s.articlesSearchWrapper}>
                <SearchArticles />
            </div>

            <ArticlesList articles={articles} view={view} />
        </Page>
    );
};

export default ArticlesPage;
