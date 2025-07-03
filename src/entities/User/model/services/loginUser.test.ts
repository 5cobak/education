import { loginUser } from './loginUser';

import { userActions } from '../slice/userSlice';
import { TestAsyncThunkActionCreator } from 'src/shared/utils/TestAsynkActionCreator';

describe('test loginUser.test', () => {
  test('test loginUser success', async () => {
    const userData = { password: '123', username: '123', id: '1' };

    const thunk = new TestAsyncThunkActionCreator(loginUser);
    thunk.$Axios.post.mockReturnValue(Promise.resolve({ data: userData }));
    const result = await thunk.callAsyncAction(userData);

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
    expect(thunk.dispatch).toBeCalledTimes(3);
    expect(thunk.$Axios.post).toBeCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userData);
  });

  test('test loginUser error', async () => {
    const userData = { password: '123', username: '123', id: '1' };

    const thunk = new TestAsyncThunkActionCreator(loginUser);
    thunk.$Axios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callAsyncAction(userData);

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(thunk.$Axios.post).toBeCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual({ key: 'loginUser_authError' });
  });
});
