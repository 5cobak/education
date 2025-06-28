import { GlobalState } from 'src/app/providers/StoreProvider/store/types';

export const selectAuthPending = (state: GlobalState) => state.login.isLoading;
