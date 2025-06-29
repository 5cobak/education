import { Reducer } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { GlobalStateKey, StoreWithReducerManager } from 'src/app/providers/StoreProvider/store/types';

export const useLayReducer = (stateKey: GlobalStateKey, reducer: Reducer) => {
  const store = useStore() as StoreWithReducerManager;
  const dispatch = useDispatch();

  useEffect(() => {
    store.reducerManager.add(stateKey, reducer);
    dispatch({ type: `@INIT ${stateKey} reducer` });

    return () => {
      store.reducerManager.remove(stateKey);
      dispatch({ type: `@DELETE ${stateKey} reducer` });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
