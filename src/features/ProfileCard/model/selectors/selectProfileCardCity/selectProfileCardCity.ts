import { GlobalState } from 'src/app/providers/StoreProvider';

export const selectProfileCardCity = (state: GlobalState) => state.profileCard?.formData.city;
