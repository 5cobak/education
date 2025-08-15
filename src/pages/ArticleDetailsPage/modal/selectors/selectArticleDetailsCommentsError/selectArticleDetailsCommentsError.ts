import { GlobalState } from 'src/app/providers/StoreProvider';

export const selectArticleDetailsCommentsError = (state: GlobalState) => state.articleDetailsComments?.error;
