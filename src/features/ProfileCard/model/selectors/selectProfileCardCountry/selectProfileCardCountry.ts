import { GlobalState } from 'src/app/providers/StoreProvider';

export const selectProfileCardCountry = (state: GlobalState) => state.profileCard?.formData.country;
