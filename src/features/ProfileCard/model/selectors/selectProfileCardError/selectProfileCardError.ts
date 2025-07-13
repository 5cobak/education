import { GlobalState } from 'src/app/providers/StoreProvider';

export const selectProfileCardError = (state: GlobalState) => state.profileCard?.error;
