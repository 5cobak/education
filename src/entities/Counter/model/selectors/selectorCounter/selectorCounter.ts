import { DeepPartial } from '@reduxjs/toolkit';
import { GlobalState } from 'src/app/providers/StoreProvider/store/types';

export const selectorCounter = (state: DeepPartial<GlobalState>) => state.counter;
