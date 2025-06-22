import counterReducer, { CounterState, decrementCounter, incrementCounter } from './counterSlice';

describe('test counterSlice.test', () => {
  const state: CounterState = {
    value: 0,
  };

  test('test increment', () => {
    expect(counterReducer(state, incrementCounter)).toEqual({ value: 1 });
  });

  test('test decrement', () => {
    expect(counterReducer(state, decrementCounter)).toEqual({ value: -1 });
  });

  test('test initial state', () => {
    expect(counterReducer(undefined, incrementCounter)).toEqual({ value: 1 });
  });
});
