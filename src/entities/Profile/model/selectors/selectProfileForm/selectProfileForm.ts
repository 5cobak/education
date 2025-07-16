import { GlobalState } from 'src/app/providers/StoreProvider';

export const selectProfileForm = (state: GlobalState) => state.profile?.form;
