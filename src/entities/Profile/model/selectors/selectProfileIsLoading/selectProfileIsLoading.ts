import { GlobalState } from 'src/app/providers/StoreProvider';

export const selectProfileIsLoading = (state: GlobalState) => state.profile?.isLoading;
