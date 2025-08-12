import { ApiError } from 'src/shared/api';

export interface ArticleState {
    data?: ArticleData;
    error?: ApiError | null;
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
    blocks: ArticleBLock[];
}

type ArticleType = 'IT' | 'Product' | 'Politic';

interface ArticleBlockBase {
    id: string;
}

export type ArticleBLock = ArticleBLockCode | ArticleBLockText | ArticleBLockImage;

interface ArticleBLockImage extends ArticleBlockBase {
    type: 'IMAGE';
    title: string;
    src: string;
}

interface ArticleBLockCode extends ArticleBlockBase {
    type: 'CODE';
    code: string;
}

interface ArticleBLockText extends ArticleBlockBase {
    type: 'TEXT';
    title: string;
    paragraphs: string[];
}
