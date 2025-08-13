import React from 'react';
import s from './index.scss';
import { CommentType } from '../modal/types';
import { Comment } from './Comment';

interface Props {
    comments: CommentType[];
    isLoading?: boolean;
}

export const CommentsList: React.FC<Props> = (props) => {
    const { comments, isLoading } = props;

    return (
        <div className={s.list}>
            {comments.map((comment) => (
                <Comment key={comment.id} comment={comment} isLoading={isLoading} />
            ))}
        </div>
    );
};
