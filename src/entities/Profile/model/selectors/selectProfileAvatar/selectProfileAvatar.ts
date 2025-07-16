import { GlobalState } from 'src/app/providers/StoreProvider';

export const selectProfileAvatar = (state: GlobalState) => state.profile?.form.avatar;
