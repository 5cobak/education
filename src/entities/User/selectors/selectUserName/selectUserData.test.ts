import { DeepPartial } from '@reduxjs/toolkit';
import { GlobalState } from 'src/app/providers/StoreProvider/store/types';
import { selectUserName } from './selectUserData';

describe('test selectUserName.test', () => {
  const state: DeepPartial<GlobalState> = {
    user: { username: 'admin', password: '123' },
  };

  test('test selector user name', () => {
    expect(selectUserName(state as GlobalState)).toEqual({ name: 'admin', password: '123' });
  });
});
