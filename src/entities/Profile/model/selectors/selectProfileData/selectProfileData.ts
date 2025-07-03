import { GlobalState } from 'src/app/providers/StoreProvider';

export const selectProfileData = (state: GlobalState) => state.profile?.data;
