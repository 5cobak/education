import { DeepPartial } from '@reduxjs/toolkit';
import { selectorCounter } from '../selectorCounter/selectorCounter';
import { GlobalState } from 'src/app/providers/StoreProvider';

describe('test selectorCounterValue.test', () => {
  test('test return value', () => {
    const state: DeepPartial<GlobalState> = {
      counter: { value: 0 },
    };
    expect(selectorCounter(state)).toEqual(state.counter);
  });
});
