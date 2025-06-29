import { createSlice } from '@reduxjs/toolkit';
import { UserPayLoadAction, UserState } from '../types';

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
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
  },
});

export const userActions = userSlice.actions;

const userReducer = userSlice.reducer;

export default userReducer;
