export { articleActions } from './model/slice/articleSlice';
export { default as articleReducer } from './model/slice/articleSlice';

export { ArticleState, ArticleBLockCodeType, ArticleBLockImageType, ArticleBLockTextType } from './types';
export { fetchArticle } from './model/services/fetchArticle/fetchArticle.async';
