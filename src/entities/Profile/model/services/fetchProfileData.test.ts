import { TestAsyncThunkActionCreator } from 'src/shared/utils/TestAsynkActionCreator';
import { $Axios } from 'src/shared/api';
import axios from 'axios';
import { fetchProfileData } from './fetchProfileData';
import { profileActions } from '../slice/profileSlice';

jest.mock('$Axios');

const mockedAxios = jest.mocked($Axios, true);

describe('test fetchProfileData.test', () => {
  test('test  success', async () => {
    const profileData = {
      firstName: 'Исмагиль',
      lastName: '5cobak',
      age: 32,
      currency: 'RUB',
      country: 'Russia',
      city: 'Samara',
      username: 'admin',
      avatar: 'https://i.pinimg.com/736x/44/7c/dd/447cdd33a5bfa514e225f79ad793f86b.jpg',
    };

    mockedAxios.get.mockReturnValue(Promise.resolve({ data: profileData }));
    const thunk = new TestAsyncThunkActionCreator(fetchProfileData);

    const result = await thunk.callAsyncAction();

    expect(thunk.dispatch).toHaveBeenCalledWith(profileActions.setProfileData(profileData));
    expect(thunk.dispatch).toBeCalledTimes(3);
    expect(mockedAxios.get).toBeCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(profileData);
  });

  test('test  error', async () => {
    const profileData = {
      firstName: 'Исмагиль',
      lastName: '5cobak',
      age: 32,
      currency: 'RUB',
      country: 'Russia',
      city: 'Samara',
      username: 'admin',
      avatar: 'https://i.pinimg.com/736x/44/7c/dd/447cdd33a5bfa514e225f79ad793f86b.jpg',
    };

    const thunk = new TestAsyncThunkActionCreator(fetchProfileData);
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callAsyncAction();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(mockedAxios.get).toBeCalled();
    expect(thunk.dispatch).not.toHaveBeenCalledWith(profileActions.setProfileData(profileData));
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual({ key: 'fetchProfileData_fail' });
  });
});
