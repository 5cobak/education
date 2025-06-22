import { createSlice } from '@reduxjs/toolkit';
import { UserState } from '../types';

const initialState: UserState = {
  name: '',
  password: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: () => {},
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
