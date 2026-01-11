import { GlobalState } from 'src/app/providers/StoreProvider';

export const selectArticlesPagePage = (state: GlobalState) => state.articlesPage?.page ?? 1;
