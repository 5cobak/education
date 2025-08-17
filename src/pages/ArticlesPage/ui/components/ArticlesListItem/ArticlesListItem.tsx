import { memo, useMemo } from 'react';
import s from './index.scss';
import { ArticleBLockTextType, ArticleData } from 'src/entities/Article';
import { Text } from 'src/shared/ui/Text';
import { Views } from 'src/shared/ui/Views/Views';
import { ArticlesView } from 'src/pages/ArticlesPage/types';
import classNames from 'classnames';
import AppLink from 'src/shared/ui/AppLink';
import { routePaths } from 'src/app/providers/RouterProvider/types';
import { Avatar } from 'src/shared/ui/Avatar';
import { SkeletonItem } from './SkeletonItem';
import { useTranslation } from 'react-i18next';

import { ButtonLink } from 'src/shared/ui/ButtonLink/ButtonLink';

interface Props {
    article: ArticleData;
    view: ArticlesView;
    isLoading?: boolean;
}

export const ArticlesListItem = memo((props: Props) => {
    const { article, view, isLoading } = props;
    const { t } = useTranslation();

    const paragraphs = useMemo(() => {
        const blocks = article.blocks.filter((block) => 'paragraphs' in block) as ArticleBLockTextType[];
        return blocks
            .map((block) => block.paragraphs)
            .flat()
            .slice(0, 2);
    }, [article]);

    if (isLoading) {
        return <SkeletonItem view={view} />;
    }

    if (view === 'small') {
        return (
            <AppLink to={`${routePaths.ARTICLE_DETAILS}${article.id}`}>
                <div className={classNames(s.card, s.small)}>
                    <img src={article.img} />
                    <span className={s.date}>{article.createdAt}</span>
                    <div className={s.header}>
                        <Text title={article.title} />
                        <Views count={article.views} />
                    </div>
                </div>
            </AppLink>
        );
    } else {
        return (
            <div className={classNames(s.card, s.big)}>
                <div className={s.header}>
                    <AppLink to={routePaths.PROFILE_PAGE + article.user.id}>
                        <div className={s.author}>
                            <Avatar size="xs" src={article.user.avatar} />
                            <div className={s.marginLeft15}>
                                <Text>{article.user.username}</Text>
                            </div>
                        </div>
                    </AppLink>
                    <span className={s.date}>{article.createdAt}</span>
                </div>
                <Text size="xl" title={article.title} />
                <span>{article.type}</span>
                <img src={article.img} className={s.img} />
                <div className={s.text}>
                    {paragraphs.map((text, index) => (
                        <p key={index}>{text}</p>
                    ))}
                </div>
                <div>
                    <ButtonLink to={routePaths.ARTICLE_DETAILS + article.id}>{t('button_readMore')}</ButtonLink>
                </div>
                <div className={s.views}>
                    <div />
                    <Views count={article.views} />
                </div>
            </div>
        );
    }
});

ArticlesListItem.displayName = 'ArticlesListItem';
