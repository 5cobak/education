import { useLayReducer } from 'src/shared/hooks/useLazyReducer';
import { ArticlesList } from './components/ArticlesList/ArticlesList';
import articlesPageReducer, { articlesPageSelector } from '../modal/articlesSlice';
import { useInitEffect } from 'src/shared/hooks/useInitEffect';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllArticles } from '../modal/services/fetchAllArticles/fetchAllArticles.asynk';

const ArticlesPage = () => {
    useLayReducer('articlesPage', articlesPageReducer);
    const dispatch = useDispatch();
    const articles = useSelector(articlesPageSelector.selectAll);

    useInitEffect(() => {
        dispatch(fetchAllArticles());
    });

    return <ArticlesList view="big" articles={articles} />;
};

export default ArticlesPage;
