import { useLayReducer } from 'src/shared/hooks/useLazyReducer';
import { ArticlesList } from './components/ArticlesList/ArticlesList';
import articlesPageReducer, { articlesPageSelector } from '../modal/articlesSlice';
import { useInitEffect } from 'src/shared/hooks/useInitEffect';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllArticles } from '../modal/services/fetchAllArticles/fetchAllArticles.asynk';
import { ViewToggler, ViewType } from 'src/features/ViewToggler';
import { useCallback, useState } from 'react';
import { LOCAL_STORAGE_ARTICLES_VIEW } from 'src/shared/api/model/consts';

const ArticlesPage = () => {
    useLayReducer('articlesPage', articlesPageReducer);
    const dispatch = useDispatch();
    const articles = useSelector(articlesPageSelector.selectAll);
    const [view, setView] = useState<ViewType>('small');

    useInitEffect(
        () => {
            dispatch(fetchAllArticles());
            // const view = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ARTICLES_VIEW) as ViewType);
            setView(view);
        },
        () => {
            // localStorage.setItem(LOCAL_STORAGE_ARTICLES_VIEW, view);
        }
    );

    const onChangeView = (view: ViewType) => {
        setView(view);
    };

    console.log(view);

    return (
        <>
            <div style={{ marginBottom: '30px' }}>
                <ViewToggler onChange={onChangeView} />
            </div>
            <ArticlesList articles={articles} view={view} />
        </>
    );
};

export default ArticlesPage;
