import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import counterReducer from 'src/entities/Counter/model/slice/counterSlice';
import { GlobalState } from './types';
import userReducer from 'src/entities/User/slice/userSlice';
import { createReducerManager } from './ReducerManager/ReducerManager';

const initialReducers: ReducersMapObject<GlobalState> = {
  counter: counterReducer,
  user: userReducer,
};

export function createReduxStore(initialState: GlobalState) {
  const reducerManager = createReducerManager(initialReducers);

  const store = configureStore<GlobalState>({
    reducer: reducerManager.reduce,
    preloadedState: initialState,
    devTools: __IS_DEV__,
  });

  //@ts-ignore
  store.reducerManager = reducerManager;
  return store;
}
