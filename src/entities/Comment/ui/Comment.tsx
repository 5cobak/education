import React from 'react';
import s from './index.scss';
import { CommentType } from 'src/entities/Comment';
import { Avatar } from 'src/shared/ui/Avatar';
import { Skeleton } from 'src/shared/ui/Skeleton';
import AppLink from 'src/shared/ui/AppLink';
import { RoutePaths } from 'src/app/providers/RouterProvider/types';

interface Props {
    comment: CommentType;
    isLoading?: boolean;
}

export const Comment: React.FC<Props> = (props) => {
    const { comment, isLoading } = props;

    if (isLoading) {
        return (
            <div className={s.comment}>
                <div className={s.header}>
                    <Skeleton width={40} height={40} border="50%" />
                    <Skeleton className={s.username} width={100} height={15} />
                </div>
                <Skeleton height={50} className={s.text} />
            </div>
        );
    }

    return (
        <div className={s.comment}>
            <div className={s.header}>
                <AppLink to={`${RoutePaths.PROFILE_PAGE}${comment.user.id}`}>
                    <Avatar size="xs" src={comment.user.avatar} />
                </AppLink>
                <span className={s.username}>{comment.user.username}</span>
            </div>
            <p className={s.text}>{comment.text}</p>
        </div>
    );
};
