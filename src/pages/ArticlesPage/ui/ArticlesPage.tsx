import { useLayReducer } from 'src/shared/hooks/useLazyReducer';
import { ArticlesList } from './components/ArticlesList/ArticlesList';
import articlesPageReducer, { articlePageActions, articlesPageSelector } from '../modal/articlesSlice';
import { useInitEffect } from 'src/shared/hooks/useInitEffect';
import { useDispatch, useSelector } from 'react-redux';
import { ViewToggler, ViewType } from 'src/features/ViewToggler';
import { Page } from 'src/shared/ui/Page';
import { selectArticlesPageView } from '../modal/selectors/selectArticlesPageView/selectArticlesPageView';
import { useCallback } from 'react';
import { fetchNextArticles } from '../modal/services/fetchNextArticles/fetchNextAArticles.asynk';

const ArticlesPage = () => {
    useLayReducer('articlesPage', articlesPageReducer);
    const dispatch = useDispatch();
    const articles = useSelector(articlesPageSelector.selectAll);
    const view = useSelector(selectArticlesPageView);

    useInitEffect(
        () => {
            // const view = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ARTICLES_VIEW) as ViewType);
            dispatch(articlePageActions.setView(view));
        },
        () => {
            // localStorage.setItem(LOCAL_STORAGE_ARTICLES_VIEW, view);
        }
    );

    const onChangeView = (view: ViewType) => {
        dispatch(articlePageActions.setView(view));
    };

    const fetchArticles = useCallback(() => {
        dispatch(fetchNextArticles());
    }, [dispatch]);

    return (
        <Page callback={fetchArticles}>
            <div style={{ marginBottom: '30px' }}>
                <ViewToggler onChange={onChangeView} />
            </div>
            <ArticlesList articles={articles} view={view} />
        </Page>
    );
};

export default ArticlesPage;
