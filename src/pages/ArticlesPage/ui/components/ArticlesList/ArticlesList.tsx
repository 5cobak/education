import { memo } from 'react';
import s from './index.scss';
import { ArticleData } from 'src/entities/Article';
import { ArticlesListItem } from '../ArticlesListItem/ArticlesListItem';

import { useSelector } from 'react-redux';
import { selectArticlesPageIsLoading } from 'src/pages/ArticlesPage/modal/selectors/selectArticlesPageIsLoading/selectArticlesPageIsLoading';
import { selectArticlesPageError } from 'src/pages/ArticlesPage/modal/selectors/selectArticlesPageError/selectArticlesPageError';
import { ViewType } from 'src/features/ViewToggler';

interface Props {
    view: ViewType;
    articles: ArticleData[];
}

export const ArticlesList = memo((props: Props) => {
    const { articles, view } = props;
    const isLoading = useSelector(selectArticlesPageIsLoading);
    const error = useSelector(selectArticlesPageError);

    return (
        <div className={s.list}>
            {error}
            {articles.length > 0
                ? articles?.map((article) => {
                      return <ArticlesListItem key={article.id} view={view} article={article} isLoading={isLoading} />;
                  })
                : null}
        </div>
    );
});

ArticlesList.displayName = 'ArticlesList';
