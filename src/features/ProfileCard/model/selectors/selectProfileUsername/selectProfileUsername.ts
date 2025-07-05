import { GlobalState } from 'src/app/providers/StoreProvider';

export const selectProfileUserName = (state: GlobalState) => state.profileCard?.formData.username;
