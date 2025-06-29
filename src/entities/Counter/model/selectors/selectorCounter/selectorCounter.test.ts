import { selectorCounter } from './selectorCounter';
import { DeepPartial } from '@reduxjs/toolkit';
import { GlobalState } from 'src/app/providers/StoreProvider/store/types';

describe('test selectorCounter.test', () => {
  test('test return value', () => {
    const state: DeepPartial<GlobalState> = { counter: { value: 0 } };

    expect(selectorCounter(state)).toEqual(state.counter);
  });
});
