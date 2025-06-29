import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '../types';
import { userActions } from '../slice/userSlice';
import { Message } from 'src/shared/utils/translationWrapper';

const LOCAL_STORAGE_USER_AUTH_DATA = 'LOCAL_STORAGE_USER_AUTH_DATA';

interface LoginUserProps {
  username: string;
  password: string;
}

// Set a default base URL for all requests
axios.defaults.baseURL = 'http://localhost:8000';

// Set default headers
axios.defaults.headers.common['Authorization'] = 'Bearer token';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const loginUser = createAsyncThunk<User, LoginUserProps, { rejectValue: Message }>(
  'user/loginUser',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', authData);

      if (!response.data) {
        throw new Error('data fetch is not found');
      }

      localStorage.setItem(LOCAL_STORAGE_USER_AUTH_DATA, JSON.stringify(response.data));

      thunkAPI.dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue({ key: 'loginUser_authError' });
    }
  }
);
