import { DeepPartial } from '@reduxjs/toolkit';
import { GlobalState } from 'src/app/providers/StoreProvider';
import { selectAuthPending } from './selectAuthPending';

describe('test selectUsername.test', () => {
  test('test get username from login slice', () => {
    const state: DeepPartial<GlobalState> = {
      login: {
        username: 'admin',
        password: '123',
        isLoading: true,
        error: undefined,
      },
    };
    expect(selectAuthPending(state as GlobalState)).toEqual(true);
  });
});
