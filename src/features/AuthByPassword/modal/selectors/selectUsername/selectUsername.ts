import { GlobalState } from 'src/app/providers/StoreProvider/store/types';

export const selectUsername = (state: GlobalState) => state.login.username;
