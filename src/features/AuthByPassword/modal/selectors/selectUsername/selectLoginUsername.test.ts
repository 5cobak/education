import { GlobalState } from 'src/app/providers/StoreProvider';
import { selectLoginUsername } from './selectLoginUsername';

describe('test selectUsername.test', () => {
  test('test get username from login slice', () => {
    const state: DeepPartial<GlobalState> = {
      login: {
        username: 'admin',
        password: '123',
      },
    };
    expect(selectLoginUsername(state as GlobalState)).toEqual('admin');
  });
});
