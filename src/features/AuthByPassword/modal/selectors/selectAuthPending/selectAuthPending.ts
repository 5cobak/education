import { GlobalState } from 'src/app/providers/StoreProvider';

export const selectAuthPending = (state: GlobalState) => state.login?.isLoading || false;
