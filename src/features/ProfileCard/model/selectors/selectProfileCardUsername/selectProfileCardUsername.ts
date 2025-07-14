import { GlobalState } from 'src/app/providers/StoreProvider';

export const selectProfileCardUserName = (state: GlobalState) => state.profileCard?.formData.username;
