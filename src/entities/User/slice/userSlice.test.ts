import { UserState } from '../types';
import userReducer, { login } from './userSlice';

describe('test counterSlice.test', () => {
  const state: UserState = {
    name: 'Ismagil',

    password: '123',
  };

  test('test increment', () => {
    // expect(userReducer(state, login)).toEqual({ value: 1 });
  });
});
