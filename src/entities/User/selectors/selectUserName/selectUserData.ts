import { GlobalState } from 'src/app/providers/StoreProvider/store/types';

export const selectUserName = (state: GlobalState) => state.user.username;
