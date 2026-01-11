import { GlobalState } from 'src/app/providers/StoreProvider';

export const selectSortField = (state: GlobalState) => state.articlesPage?.sortField || 'views';
export const selectSortOrder = (state: GlobalState) => state.articlesPage?.sortOrder || 'asc';
export const selectSearch = (state: GlobalState) => state.articlesPage?.search;
