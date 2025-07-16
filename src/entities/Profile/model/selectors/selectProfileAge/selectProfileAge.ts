import { GlobalState } from 'src/app/providers/StoreProvider';

export const selectProfileAge = (state: GlobalState) => state.profile?.form.age;
