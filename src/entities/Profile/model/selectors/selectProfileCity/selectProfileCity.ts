import { GlobalState } from 'src/app/providers/StoreProvider';

export const selectProfileCity = (state: GlobalState) => state.profile?.form.city;
