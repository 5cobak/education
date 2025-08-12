import { GlobalState } from 'src/app/providers/StoreProvider';

export const selectArticleIsLoading = (state: GlobalState) => state.article?.isLoading;
