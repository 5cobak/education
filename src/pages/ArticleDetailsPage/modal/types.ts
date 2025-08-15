import { EntityState } from '@reduxjs/toolkit';
import { CommentType } from 'src/entities/Comment';
import { ApiError } from 'src/shared/api';

export interface ArticleDetailsCommentsState extends EntityState<CommentType> {
    error?: ApiError | string;
    isLoading?: boolean;
    isCommentsLoading?: boolean;
    commentsError?: ApiError | string;
    _initialed: boolean;
}
