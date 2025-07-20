import { GlobalState } from 'src/app/providers/StoreProvider';

export const selectUserInitialed = (state: GlobalState) => state.user._initialed;
