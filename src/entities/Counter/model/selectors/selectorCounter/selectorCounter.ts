import { GlobalState } from 'src/app/providers/StoreProvider';

export const selectorCounter = (state: GlobalState) => state.counter;
