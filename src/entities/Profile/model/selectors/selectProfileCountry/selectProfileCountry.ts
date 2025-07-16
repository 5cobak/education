import { GlobalState } from 'src/app/providers/StoreProvider';

export const selectProfileCountry = (state: GlobalState) => state.profile?.form.country;
