import { createSelector } from '@reduxjs/toolkit';
import { CounterState } from '../../slice/counterSlice';
import { selectorCounter } from '../selectorCounter/selectorCounter';

export const selectorCounterValue = createSelector(selectorCounter, (state: CounterState) => state.value);
