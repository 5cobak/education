import { DeepPartial } from '@reduxjs/toolkit';
import { GlobalState } from 'src/app/providers/StoreProvider/store/types';
import { selectUsername } from './selectUsername';

describe('test selectUsername.test', () => {
  test('test get username from login slice', () => {
    const state: DeepPartial<GlobalState> = {
      login: {
        username: 'admin',
        password: '123',
      },
    };
    expect(selectUsername(state as GlobalState)).toEqual('admin');
  });
});
