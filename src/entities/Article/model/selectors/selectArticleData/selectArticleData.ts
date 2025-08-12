import { GlobalState } from 'src/app/providers/StoreProvider';

export const selectArticleData = (state: GlobalState) => state.article?.data;
