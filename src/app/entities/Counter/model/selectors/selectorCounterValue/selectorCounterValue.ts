import { createSelector } from '@reduxjs/toolkit';

import { useSelectorCounter } from '../useSelectorCounter/useSelectorCounter';
import { CounterState } from '../../counterSlice';

export const selectorCounterValue = () => {
  return createSelector(useSelectorCounter, (state: CounterState) => state.value);
};
