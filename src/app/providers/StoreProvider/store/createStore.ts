import { configureStore } from '@reduxjs/toolkit';
import counterReducer from 'src/entities/Counter/model/slice/counterSlice';
import { GlobalState } from './types';
import userReducer from 'src/entities/User/slice/userSlice';

export function createReduxStore(initialState: GlobalState) {
  return configureStore<GlobalState>({
    reducer: {
      counter: counterReducer,
      user: userReducer,
    },
    preloadedState: initialState,
  });
}
