import { configureStore } from '@reduxjs/toolkit';
import counterReducer from 'src/app/entities/Counter/model/counterSlice';
import { GlobalState } from '../types';
import { initialState } from './initialState';

export const store = configureStore<GlobalState>({
  reducer: {
    counter: counterReducer,
  },
  preloadedState: initialState,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
