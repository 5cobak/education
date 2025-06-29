import { configureStore } from '@reduxjs/toolkit';
import counterReducer from 'src/entities/Counter/model/slice/counterSlice';
import { GlobalState } from './types';
import userReducer from 'src/entities/User/slice/userSlice';
import loginReducer from 'src/features/AuthByPassword/modal/slice/loginSlice';

export function createReduxStore(initialState: GlobalState) {
  return configureStore<GlobalState>({
    reducer: {
      counter: counterReducer,
      user: userReducer,
      login: loginReducer,
    },
    preloadedState: initialState,
    devTools: __IS_DEV__,
  });
}
