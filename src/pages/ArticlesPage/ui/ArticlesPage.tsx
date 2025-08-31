import { useLayReducer } from 'src/shared/hooks/useLazyReducer';
import { ArticlesList } from './components/ArticlesList/ArticlesList';
import articlesPageReducer, { articlePageActions, articlesPageSelector } from '../modal/articlesSlice';
import { useInitEffect } from 'src/shared/hooks/useInitEffect';
import { useDispatch, useSelector } from 'react-redux';
import { ViewToggler, ViewType } from 'src/features/ViewToggler';
import { Page } from 'src/shared/ui/Page';
import { selectArticlesPageView } from '../modal/selectors/selectArticlesPageView/selectArticlesPageView';
import { useCallback, useEffect } from 'react';
import { fetchNextArticles } from '../modal/services/fetchNextArticles/fetchNextAArticles.asynk';
import { LOCAL_STORAGE_ARTICLES_VIEW } from 'src/shared/api/model/consts';

const ARTICLES_PAGE_SCROLL_POSITION = 'ARTICLES_PAGE_SCROLL_POSITION';

const ArticlesPage = () => {
    useLayReducer('articlesPage', articlesPageReducer);
    const dispatch = useDispatch();
    const articles = useSelector(articlesPageSelector.selectAll);
    const view = useSelector(selectArticlesPageView);

    useInitEffect(() => {
        const view = localStorage.getItem(LOCAL_STORAGE_ARTICLES_VIEW);
        if (view) {
            dispatch(articlePageActions.setView(JSON.parse(view) as ViewType));
        }
    });

    const onChangeView = (view: ViewType) => {
        dispatch(articlePageActions.setView(view));
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
            <div style={{ marginBottom: '30px' }}>
                <ViewToggler initialView={view} onChange={onChangeView} />
            </div>
            <ArticlesList articles={articles} view={view} />
        </Page>
    );
};

export default ArticlesPage;
