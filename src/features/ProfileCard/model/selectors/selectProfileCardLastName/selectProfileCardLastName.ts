import { GlobalState } from 'src/app/providers/StoreProvider';

export const selectProfileCardLastName = (state: GlobalState) => state.profileCard?.formData.lastName;
