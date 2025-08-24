import { GlobalState } from 'src/app/providers/StoreProvider';

export const selectArticlesPageHasMore = (state: GlobalState) => state.articlesPage?.hasMore;
