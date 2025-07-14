import { GlobalState } from 'src/app/providers/StoreProvider';

export const selectProfileCardFirstName = (state: GlobalState) => state.profileCard?.formData.firstName;
