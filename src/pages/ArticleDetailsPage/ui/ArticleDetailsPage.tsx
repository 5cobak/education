import { CommentsList } from 'src/entities/Comment';
import { ArticleDetails } from './components/ArticleDetails/ArticleDetails';
import articleDetailsCommentsReducer, { articleDetailsCommentsSelectors } from '../modal/articleDetailsCommentsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useInitEffect } from 'src/shared/hooks/useInitEffect';
import { fetchCommentsByArticleId } from '../modal/services/fetchArticleComments/fetchArticleComments.asynk';
import { useLayReducer } from 'src/shared/hooks/useLazyReducer';
import { useParams } from 'react-router-dom';

const ArticleDetailsPage = () => {
    const comments = useSelector(articleDetailsCommentsSelectors.selectAll);
    const dispatch = useDispatch();
    const { id } = useParams();

    useInitEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    useLayReducer('articleDetailsComments', articleDetailsCommentsReducer);

    return (
        <div>
            <ArticleDetails />
            <CommentsList comments={comments} />
        </div>
    );
};

export default ArticleDetailsPage;
