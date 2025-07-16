import { GlobalState } from 'src/app/providers/StoreProvider';

export const selectProfileIsEditable = (state: GlobalState) => state.profile?.isEditable;
