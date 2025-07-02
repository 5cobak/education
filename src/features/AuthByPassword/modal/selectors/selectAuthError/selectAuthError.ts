import { GlobalState } from 'src/app/providers/StoreProvider';

export const selectAuthError = (state: GlobalState) => state.login?.error;
