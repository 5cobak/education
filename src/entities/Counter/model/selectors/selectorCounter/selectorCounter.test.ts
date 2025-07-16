import { selectorCounter } from './selectorCounter';

import { GlobalState } from 'src/app/providers/StoreProvider';

describe('test selectorCounter.test', () => {
  test('test return value', () => {
    const state: DeepPartial<GlobalState> = { counter: { value: 0 } };

    expect(selectorCounter(state as GlobalState)).toEqual({ value: 0 });
  });
});
