import { GlobalState } from 'src/app/providers/StoreProvider';

export const selectArticlesSortField = (state: GlobalState) => state.articlesPage?.sortField ?? 'createdAt';
