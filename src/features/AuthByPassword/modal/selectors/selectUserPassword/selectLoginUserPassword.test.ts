import { GlobalState } from 'src/app/providers/StoreProvider';
import { selectLoginUserPassword } from './selectLoginUserPassword';

describe('test selectUsername.test', () => {
  test('test get username from login slice', () => {
    const state: DeepPartial<GlobalState> = {
      login: {
        username: 'admin',
        password: '123',
      },
    };
    expect(selectLoginUserPassword(state as GlobalState)).toEqual('123');
  });
});
