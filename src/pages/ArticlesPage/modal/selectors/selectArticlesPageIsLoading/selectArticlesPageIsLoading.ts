import { GlobalState } from 'src/app/providers/StoreProvider';

export const selectArticlesPageIsLoading = (state: GlobalState) => state.articlesPage?.isLoading;
