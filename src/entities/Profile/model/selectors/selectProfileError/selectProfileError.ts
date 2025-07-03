import { GlobalState } from 'src/app/providers/StoreProvider';

export const selectProfileError = (state: GlobalState) => state.profile?.error;
