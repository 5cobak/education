import { GlobalState } from 'src/app/providers/StoreProvider';

export const selectProfileCardIsLoading = (state: GlobalState) => state.profileCard?.isLoading;
