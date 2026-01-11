import { GlobalState } from 'src/app/providers/StoreProvider';

export const selectArticlesSearch = (state: GlobalState) => state.articlesPage?.search ?? '';
