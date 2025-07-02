import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import counterReducer from 'src/entities/Counter/model/slice/counterSlice';
import { GlobalState, NavigationFunction, ThunExtra } from './types';

import { createReducerManager } from './ReducerManager/ReducerManager';
import { $Axios } from 'src/shared/api';
import { userReducer } from 'src/entities/User';

const initialReducers: ReducersMapObject<GlobalState> = {
  counter: counterReducer,
  user: userReducer,
};

export function createReduxStore<GlobalState>(initialState: GlobalState, navigation: NavigationFunction) {
  const reducerManager = createReducerManager(initialReducers);

  const extraArgument: ThunExtra = {
    $Axios,
    navigation,
  };

  const store = configureStore({
    reducer: reducerManager.reduce,
    preloadedState: initialState,
    devTools: __IS_DEV__,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument,
        },
      }),
  });

  //@ts-ignore
  store.reducerManager = reducerManager;
  return store;
}
