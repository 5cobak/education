import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { CounterState } from 'src/entities/Counter/model/slice/counterSlice';
import { UserState } from 'src/entities/User';
import { LoginState } from 'src/features/AuthByPassword';

export interface GlobalState {
  counter: CounterState;
  user: UserState;
  login?: LoginState;
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
