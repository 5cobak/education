import { GlobalState } from 'src/app/providers/StoreProvider';

export const selectArticlesSortOrder = (state: GlobalState) => state.articlesPage?.sortOrder ?? 'asc';
