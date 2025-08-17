import { GlobalState } from 'src/app/providers/StoreProvider';

export const selectArticlesPageError = (state: GlobalState) => state.articlesPage?.error;
