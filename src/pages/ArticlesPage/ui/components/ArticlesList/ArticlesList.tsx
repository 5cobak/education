import { memo } from 'react';
import s from './index.scss';
import { ArticleData } from 'src/entities/Article';
import { ArticlesListItem } from '../ArticlesListItem/ArticlesListItem';

import { useSelector } from 'react-redux';
import { selectArticlesPageIsLoading } from 'src/pages/ArticlesPage/modal/selectors/selectArticlesPageIsLoading/selectArticlesPageIsLoading';
import { selectArticlesPageError } from 'src/pages/ArticlesPage/modal/selectors/selectArticlesPageError/selectArticlesPageError';
import { ViewType } from 'src/features/ViewToggler';

import { SkeletonItem } from '../ArticlesListItem/SkeletonItem';

interface Props {
    view: ViewType;
    articles: ArticleData[];
}

const getSkeleton = (view: ViewType) => {
    return new Array(view === 'small' ? 6 : 2).fill(0).map((_, index) => <SkeletonItem key={index} view={view} />);
};

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
            {isLoading && getSkeleton(view)}
        </div>
    );
});

ArticlesList.displayName = 'ArticlesList';
