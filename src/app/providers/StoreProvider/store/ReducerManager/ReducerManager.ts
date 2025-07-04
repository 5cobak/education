import { AnyAction, combineReducers, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { GlobalState, GlobalStateKey, ReducerManager } from '../types';

export function createReducerManager(initialReducers: ReducersMapObject<GlobalState>): ReducerManager {
  const reducers = { ...initialReducers };

  let combinedReducer = combineReducers(reducers);

  let keysToRemove: GlobalStateKey[] = [];

  return {
    getReducerMap: () => reducers,

    reduce: (state: GlobalState, action: AnyAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state };
        for (const key of keysToRemove) {
          delete state[key];
        }
        keysToRemove = [];
      }

      return combinedReducer(state, action);
    },

    add: (key: GlobalStateKey, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return;
      }

      reducers[key] = reducer;

      combinedReducer = combineReducers(reducers);
    },

    remove: (key: GlobalStateKey) => {
      if (!key || !reducers[key]) {
        return;
      }

      delete reducers[key];

      keysToRemove.push(key);

      combinedReducer = combineReducers(reducers);
    },
  };
}
