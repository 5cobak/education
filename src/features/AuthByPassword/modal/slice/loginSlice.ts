import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { loginUser } from 'src/entities/User';
import { LoginPasswordPayload, LoginUsernamePayload } from '../types';

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action: LoginPasswordPayload) => {
      state.username = action.payload;
    },
    setPassword: (state, action: LoginUsernamePayload) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.username = action.payload.username;
        state.password = action.payload.password;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const loginActions = loginSlice.actions;

const loginReducer = loginSlice.reducer;

export default loginReducer;
