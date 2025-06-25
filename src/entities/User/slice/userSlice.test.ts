import { UserState } from '../types';
import { userActions } from './userSlice';

describe('test counterSlice.test', () => {
  const state: UserState = {
    username: '',

    password: '',
  };

  test('test increment', () => {
    expect(userActions.setAuthData('admin')).toEqual({ name: 'admin', password: '' });
  });

  test('test increment', () => {
    expect(userActions.changePassword('123')).toEqual({ name: 'admin', password: '123' });
  });
});
