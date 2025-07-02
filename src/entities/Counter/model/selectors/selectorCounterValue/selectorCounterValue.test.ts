import { selectorCounter } from '../selectorCounter/selectorCounter';
import { GlobalState } from 'src/app/providers/StoreProvider';
import { selectorCounterValue } from './selectorCounterValue';

describe('test selectorCounterValue.test', () => {
  test('test return value', () => {
    const state: DeepPartial<GlobalState> = {
      counter: { value: 0 },
    };
    expect(selectorCounterValue(state as GlobalState)).toEqual(0);
  });
});
