import { GlobalState } from 'src/app/providers/StoreProvider/store/types';

export const selectLoginUserPassword = (state: GlobalState) => state.login?.password || '';
