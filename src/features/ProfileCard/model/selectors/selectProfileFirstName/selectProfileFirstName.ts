import { GlobalState } from 'src/app/providers/StoreProvider';

export const selectProfileFirstName = (state: GlobalState) => state.profileCard?.formData.firstName;
