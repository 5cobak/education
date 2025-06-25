import { createSlice } from '@reduxjs/toolkit';
import { UserPayLoadAction, UserState } from '../types';
import { loginUser } from '../services/loginUser';

const initialState: UserState = {
  id: '',
  username: '',
  password: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: UserPayLoadAction) => {
      state = action.payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
