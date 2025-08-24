import { GlobalState } from 'src/app/providers/StoreProvider';

export const selectArticlesPageView = (state: GlobalState) => state.articlesPage?.view || 'small';
