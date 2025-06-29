import { GlobalState } from 'src/app/providers/StoreProvider/store/types';

export const selectAuthError = (state: GlobalState) => state.login?.error;
