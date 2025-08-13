import { ApiError } from 'src/shared/api';

export interface ArticleState {
    data?: ArticleData;
    error?: ApiError | string;
    isLoading?: boolean;
    _initialed: boolean;
}

export interface ArticleData {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType;
    blocks: ArticleBLockType[];
}

type ArticleType = 'IT' | 'Product' | 'Politic';

interface ArticleBlockBase {
    id: string;
}

export type ArticleBLockType = ArticleBLockCodeType | ArticleBLockTextType | ArticleBLockImageType;

export interface ArticleBLockImageType extends ArticleBlockBase {
    type: 'IMAGE';
    title: string;
    src: string;
}

export interface ArticleBLockCodeType extends ArticleBlockBase {
    type: 'CODE';
    code: string;
}

export interface ArticleBLockTextType extends ArticleBlockBase {
    type: 'TEXT';
    title: string;
    paragraphs: string[];
}
