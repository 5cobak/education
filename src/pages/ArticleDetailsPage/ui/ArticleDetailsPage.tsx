import { CommentsList } from 'src/entities/Comment';
import { ArticleDetails } from './components/ArticleDetails/ArticleDetails';
import articleDetailsCommentsReducer, { articleDetailsCommentsSelectors } from '../modal/articleDetailsCommentsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useInitEffect } from 'src/shared/hooks/useInitEffect';
import { fetchCommentsByArticleId } from '../modal/services/fetchArticleComments/fetchArticleComments.asynk';
import { useLayReducer } from 'src/shared/hooks/useLazyReducer';
import { useParams } from 'react-router-dom';
import { AddCommentForm } from 'src/features/AddCommentForm/ui/AddCommentForm';
import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { addNewComment } from '../modal/services/addNewComment/addNewComment.asynk';
import { selectArticleDetailsCommentsIsLoading } from '../modal/selectors/selectArticleDetailsCommentsIsLoading/selectArticleDetailsCommentsIsLoading';
import { selectArticleDetailsCommentsError } from '../modal/selectors/selectArticleDetailsCommentsError/selectArticleDetailsCommentsError';

const ArticleDetailsPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { t } = useTranslation();
    const comments = useSelector(articleDetailsCommentsSelectors.selectAll);

    const isLoading = useSelector(selectArticleDetailsCommentsIsLoading);
    const error = useSelector(selectArticleDetailsCommentsError);

    useInitEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    useLayReducer('articleDetailsComments', articleDetailsCommentsReducer);

    const addNewCommentHandler = useCallback(
        (text: string) => {
            dispatch(addNewComment(text));
        },
        [dispatch]
    );

    return (
        <div>
            <ArticleDetails />
            <AddCommentForm onAddComment={addNewCommentHandler} isLoading={isLoading} error={error} />
            <h2 style={{ display: 'inline-block', margin: '20px 0' }}>{t('Comments')}</h2>
            <CommentsList comments={comments} isLoading={isLoading} />
        </div>
    );
};

export default ArticleDetailsPage;
