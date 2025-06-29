import { loginUser } from './loginUser';

import { userActions } from '../slice/userSlice';
import { TestAsyncThunkActionCreator } from 'src/shared/utils/TestAsynkActionCreator';

import axios from 'axios';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('test loginUser.test', () => {
  test('test loginUser success', async () => {
    const userData = { password: '123', username: '123', id: '1' };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));
    const thunk = new TestAsyncThunkActionCreator(loginUser);

    const result = await thunk.callAsyncAction(userData);

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
    expect(thunk.dispatch).toBeCalledTimes(3);
    expect(mockedAxios.post).toBeCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userData);
  });

  test('test loginUser error', async () => {
    const userData = { password: '123', username: '123', id: '1' };

    const thunk = new TestAsyncThunkActionCreator(loginUser);
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callAsyncAction(userData);

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(mockedAxios.post).toBeCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual({ key: 'loginUser_authError' });
  });
});
