import { GlobalState } from 'src/app/providers/StoreProvider';

export const selectUserName = (state: GlobalState) => state.user.username;
