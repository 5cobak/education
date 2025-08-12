import React, { useEffect } from 'react';
import s from './index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Skeleton } from 'src/shared/ui/Skeleton';
import { Avatar } from 'src/shared/ui/Avatar';
import { Text } from 'src/shared/ui/Text';
import EyeIcon from 'src/shared/assets/icons/eye.svg';
import CalendarIcon from 'src/shared/assets/icons/calendar.svg';
import { useParams } from 'react-router-dom';
import { articleReducer, fetchArticle } from 'src/entities/Article';
import { useLayReducer } from 'src/shared/hooks/useLazyReducer';
import { selectArticleData } from 'src/entities/Article/model/selectors/selectArticleData/selectArticleData';
import { selectArticleInitialed } from 'src/entities/Article/model/selectors/selectArticleInitialed/selectArticleInitialed';
import { selectArticleIsLoading } from 'src/entities/Article/model/selectors/selectArticleIsLoading/selectArticleIsLoading';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';

export const ArticleDetails: React.FC = () => {
    const data = useSelector(selectArticleData);
    const initialized = useSelector(selectArticleInitialed);
    const isLoading = useSelector(selectArticleIsLoading);
    const { id } = useParams();
    const dispatch = useDispatch();

    useLayReducer('article', articleReducer);

    useEffect(() => {
        if (id) {
            dispatch(fetchArticle(id));
        }
    }, [id, dispatch]);

    let content;

    if (!initialized || isLoading) {
        content = (
            <>
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
            </>
        );
    } else if (data) {
        content = (
            <>
                <div className={s.articleAvatar}>
                    <Avatar src={data.img} size="xl" />
                </div>
                <Text title={data.title} size="xl" />
                <Text title={data.subtitle} size="xl" />
                <div className={s.metaData}>
                    <div className={s.viewsCount}>
                        <EyeIcon />
                        {data.views}
                    </div>
                    <div className={s.createdDate}>
                        <CalendarIcon />
                        {data.createdAt}
                    </div>
                </div>
                {data.blocks.map((block) => {
                    switch (block.type) {
                        case 'CODE':
                            return <div>Text</div>;
                            break;
                        case 'IMAGE':
                            return <div>Image</div>;
                        case 'TEXT':
                            return <ArticleTextBlock title={block.title} paragraphs={block.paragraphs} />;
                    }
                })}
            </>
        );
    }
    return <div className={s.articleWrapper}>{content}</div>;
};
