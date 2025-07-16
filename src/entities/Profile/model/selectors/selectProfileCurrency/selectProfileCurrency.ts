import { GlobalState } from 'src/app/providers/StoreProvider';

export const selectProfileCurrency = (state: GlobalState) => state.profile?.form.currency;
