import { EntityState } from '@reduxjs/toolkit';
import { ArticleData } from 'src/entities/Article';
import { ViewType } from 'src/features/ViewToggler';
import { ApiError } from 'src/shared/api';
import { SortOrder } from 'src/shared/types';

export type ArticlesSortField = 'views' | 'title' | 'createdAt';

export interface ArticlesPageState extends EntityState<ArticleData> {
    hasMore: boolean;
    view: ViewType;
    sortField: ArticlesSortField;
    sortOrder: SortOrder;
    search: string;
    error?: ApiError | string;
    page?: number;
    isLoading?: boolean;
}
