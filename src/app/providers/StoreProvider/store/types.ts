import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';

import { AxiosInstance } from 'axios';
import { NavigateOptions, To } from 'react-router-dom';

import { CounterState } from 'src/entities/Counter/model/slice/counterSlice';
import { ProfileState } from 'src/entities/Profile';
import { UserState } from 'src/entities/User';
import { LoginState } from 'src/features/AuthByPassword';
import { ProfileCardState } from 'src/features/ProfileCard/model/types';

export interface GlobalState {
  counter: CounterState;
  user: UserState;
  login?: LoginState;
  profile?: ProfileState;
  profileCard?: ProfileCardState;
}

export interface StoreWithReducerManager extends EnhancedStore {
  reducerManager: ReducerManager;
}

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<GlobalState>;
  reduce: (state: GlobalState, action: AnyAction) => CombinedState<GlobalState>;
  add: (key: GlobalStateKey, reducer: Reducer) => void;
  remove: (key: GlobalStateKey) => void;
}

export type GlobalStateKey = keyof GlobalState;

export interface ThunkConfig<E> {
  rejectValue: E;
  extra: ThunExtra;
}

export interface ThunExtra {
  $Axios: AxiosInstance;
  navigation: NavigationFunction;
}

export type NavigationFunction = (to: To, options?: NavigateOptions) => void;
