import { GlobalState } from 'src/app/providers/StoreProvider';

export const selectLoginUserPassword = (state: GlobalState) => state.login?.password || '';
