import { EntityState } from '@reduxjs/toolkit';
import { ArticleData } from 'src/entities/Article';
import { ApiError } from 'src/shared/api';

export type ArticlesView = 'big' | 'small';

export interface ArticlesPageState extends EntityState<ArticleData> {
    isLoading?: boolean;
    error?: ApiError | string;
}
