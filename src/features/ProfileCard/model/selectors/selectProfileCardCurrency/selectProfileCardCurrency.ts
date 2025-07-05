import { GlobalState } from 'src/app/providers/StoreProvider';

export const selectProfileCardCurrency = (state: GlobalState) => state.profileCard?.formData.currency;
