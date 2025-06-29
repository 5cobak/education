import { GlobalState } from 'src/app/providers/StoreProvider/store/types';

export const selectUserPassword = (state: GlobalState) => state.login.password;
