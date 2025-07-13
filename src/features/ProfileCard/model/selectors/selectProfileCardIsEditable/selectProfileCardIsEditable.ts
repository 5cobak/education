import { GlobalState } from 'src/app/providers/StoreProvider';

export const selectProfileCardIsEditable = (state: GlobalState) => state.profileCard?.isEditable;
