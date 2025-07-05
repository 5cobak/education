import { GlobalState } from 'src/app/providers/StoreProvider';

export const selectProfileCardAge = (state: GlobalState) => state.profileCard?.formData.age;
