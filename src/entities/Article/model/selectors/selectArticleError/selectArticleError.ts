import { GlobalState } from 'src/app/providers/StoreProvider';

export const selectArticleError = (state: GlobalState) => state.article?.error;
