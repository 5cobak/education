import { DeepPartial } from '@reduxjs/toolkit';
import { GlobalState } from 'src/app/providers/StoreProvider';
import { selectAuthError } from './selectAuthError';

describe('test selectAuthError.test', () => {
  test('test selection error from login state', () => {
    const state: DeepPartial<GlobalState> = {
      login: {
        username: 'admin',
        password: '13123',
        isLoading: false,
        error: { key: 'Auth_error' },
      },
    };
    expect(selectAuthError(state as GlobalState)).toEqual({ key: 'Auth_error' });
  });
});
