import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '../types';
import { userActions } from '../slice/userSlice';
import { v4 as uuid } from 'uuid';
import i18n from 'config/i18Next/config';

const LOCAL_STORAGE_USER_AUTH_DATA = 'LOCAL_STORAGE_USER_AUTH_DATA';

interface LoginUserProps {
  username: string;
  password: string;
}

export const loginUser = createAsyncThunk<User, LoginUserProps, { rejectValue: string }>(
  'user/loginUser',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post(`https://localhost/:8000/users/${{ id: uuid(), ...authData }}`);

      if (!response.data) {
        throw new Error('data fetch is not found');
      }

      localStorage.setItem(LOCAL_STORAGE_USER_AUTH_DATA, JSON.stringify(response.data));

      thunkAPI.dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(i18n.t('loginUser_authError'));
    }
  }
);
