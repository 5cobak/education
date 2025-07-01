import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '../types';
import { userActions } from '../slice/userSlice';
import { Message } from 'src/shared/utils/translationWrapper';
import { ThunkConfig } from 'src/app/providers/StoreProvider';
import { LOCAL_STORAGE_USER_AUTH_DATA } from 'src/shared/api';

interface LoginUserProps {
  username: string;
  password: string;
}

export const loginUser = createAsyncThunk<User, LoginUserProps, ThunkConfig<Message>>(
  'user/loginUser',
  async (authData, thunkAPI) => {
    const { extra, rejectWithValue, dispatch } = thunkAPI;
    try {
      const response = await extra.$Axios.post<User>('/login', authData);

      if (!response.data) {
        throw new Error('data fetch is not found');
      }

      localStorage.setItem(LOCAL_STORAGE_USER_AUTH_DATA, JSON.stringify(response.data));

      dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (e) {
      return rejectWithValue({ key: 'loginUser_authError' });
    }
  }
);
