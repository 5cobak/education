import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { loginUser } from 'src/entities/User';

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state = { isLoading: false, ...action.payload };
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const userActions = loginSlice.actions;

export default loginSlice.reducer;
