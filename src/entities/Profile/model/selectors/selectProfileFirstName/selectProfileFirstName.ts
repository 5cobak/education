import { GlobalState } from 'src/app/providers/StoreProvider';

export const selectProfileFirstName = (state: GlobalState) => state.profile?.form.firstName;
