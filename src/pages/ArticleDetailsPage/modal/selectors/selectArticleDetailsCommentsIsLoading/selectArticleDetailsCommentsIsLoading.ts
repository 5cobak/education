import { GlobalState } from 'src/app/providers/StoreProvider';

export const selectArticleDetailsCommentsIsLoading = (state: GlobalState) => state.articleDetailsComments?.isLoading;
