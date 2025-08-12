import { GlobalState } from 'src/app/providers/StoreProvider';

export const selectArticleInitialed = (state: GlobalState) => state.article?._initialed;
