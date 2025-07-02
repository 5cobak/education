import { GlobalState } from 'src/app/providers/StoreProvider';

export const selectLoginUsername = (state: GlobalState) => state.login?.username || '';
