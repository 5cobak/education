import React from 'react';
import s from './index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Skeleton } from 'src/shared/ui/Skeleton';
import { Avatar } from 'src/shared/ui/Avatar';
import { Text } from 'src/shared/ui/Text';
import CalendarIcon from 'src/shared/assets/icons/calendar.svg';
import { useParams } from 'react-router-dom';
import { articleReducer, fetchArticle } from 'src/entities/Article';
import { useLayReducer } from 'src/shared/hooks/useLazyReducer';
import { selectArticleData } from 'src/entities/Article/model/selectors/selectArticleData/selectArticleData';
import { selectArticleInitialed } from 'src/entities/Article/model/selectors/selectArticleInitialed/selectArticleInitialed';
import { selectArticleIsLoading } from 'src/entities/Article/model/selectors/selectArticleIsLoading/selectArticleIsLoading';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';
import { ArticleImgBlock } from '../ArticleImgBlock/ArticleImgBlock';
import classNames from 'classnames';
import { ArticleCodeBlock } from '../ArticleCodeBlock/ArticleCodeBlock';
import { useInitEffect } from 'src/shared/hooks/useInitEffect';
import { Views } from 'src/shared/ui/Views/Views';
import { ButtonLink } from 'src/shared/ui/ButtonLink/ButtonLink';
import { routePaths } from 'src/app/providers/RouterProvider/types';
import { useTranslation } from 'react-i18next';

export const ArticleDetails: React.FC = () => {
    const data = useSelector(selectArticleData);
    const initialized = useSelector(selectArticleInitialed);
    const isLoading = useSelector(selectArticleIsLoading);
    const { id } = useParams();
    const dispatch = useDispatch();
    const { t } = useTranslation();

    useLayReducer('article', articleReducer);

    useInitEffect(() => {
        dispatch(fetchArticle(id));
    });

    let content;

    if (!initialized || isLoading) {
        content = (
            <div>
                <div className={s.articleAvatar}>
                    <Skeleton border="50%" width={200} height={200} />
                </div>
                <div className={s.titleSkeleton}>
                    <Skeleton width={400} height={50} />
                </div>
                <div className={s.contentSkeleton}>
                    <Skeleton width={'100%'} height={300} />
                </div>
                <div className={s.contentSkeleton}>
                    <Skeleton width={'100%'} height={300} />
                </div>
            </div>
        );
    } else if (data) {
        content = (
            <div>
                <ButtonLink needBack>{t('article_backToArticlesLink')}</ButtonLink>

                <div className={s.articleAvatar}>
                    <Avatar src={data.img} size="xl" />
                </div>
                <Text title={data.title} size="xl" />
                <Text title={data.subtitle} size="xl" />
                <div className={s.metaData}>
                    <Views countIsFirst count={data.views} />
                    <div className={s.createdDate}>
                        <CalendarIcon />
                        {data.createdAt}
                    </div>
                </div>
                {data.blocks.map((block) => {
                    switch (block.type) {
                        case 'CODE':
                            return (
                                <div className={s.block}>
                                    <ArticleCodeBlock block={block} />
                                </div>
                            );
                            break;
                        case 'IMAGE':
                            return (
                                <div className={classNames(s.block, s.imgBlock)}>
                                    <ArticleImgBlock block={block} />
                                </div>
                            );
                        case 'TEXT':
                            return (
                                <div className={s.block}>
                                    <ArticleTextBlock block={block} />
                                </div>
                            );
                    }
                })}
            </div>
        );
    }
    return <div className={s.articleWrapper}>{content}</div>;
};
