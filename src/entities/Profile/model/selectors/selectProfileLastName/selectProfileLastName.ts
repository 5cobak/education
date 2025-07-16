import { GlobalState } from 'src/app/providers/StoreProvider';

export const selectProfileLastName = (state: GlobalState) => state.profile?.form.lastName;
