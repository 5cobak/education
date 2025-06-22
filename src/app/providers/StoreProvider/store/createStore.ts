import { configureStore } from '@reduxjs/toolkit';
import counterReducer from 'src/entities/Counter/model/slice/counterSlice';
import { GlobalState } from '../types';

export function createReduxStore(initialState: GlobalState) {
  return configureStore<GlobalState>({
    reducer: {
      counter: counterReducer,
    },
    preloadedState: initialState,
  });
}
