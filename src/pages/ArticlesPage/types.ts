import { EntityState } from '@reduxjs/toolkit';
import { ArticleData } from 'src/entities/Article';
import { ViewType } from 'src/features/ViewToggler';
import { ApiError } from 'src/shared/api';

export interface ArticlesPageState extends EntityState<ArticleData> {
    hasMore: boolean;
    view: ViewType;
    page?: number;
    isLoading?: boolean;
    error?: ApiError | string;
}
