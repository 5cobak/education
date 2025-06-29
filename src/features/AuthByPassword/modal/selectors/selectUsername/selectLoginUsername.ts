import { GlobalState } from 'src/app/providers/StoreProvider/store/types';

export const selectLoginUsername = (state: GlobalState) => state.login?.username || '';
