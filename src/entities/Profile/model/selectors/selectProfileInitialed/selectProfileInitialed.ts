import { GlobalState } from 'src/app/providers/StoreProvider';

export const selectProfileInitialed = (state: GlobalState) => state.profile?._initialed;
