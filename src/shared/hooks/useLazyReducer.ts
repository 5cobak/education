import { Reducer } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { GlobalStateKey, StoreWithReducerManager } from 'src/app/providers/StoreProvider';

export const useLayReducer = (stateKey: GlobalStateKey, reducer: Reducer, needDeleteAfterUnmount?: boolean) => {
    const store = useStore() as StoreWithReducerManager;
    const dispatch = useDispatch();

    useEffect(() => {
        const alreadyHas = store.reducerManager.getReducerMap()[stateKey];

        if (!alreadyHas) {
            store.reducerManager.add(stateKey, reducer);
            dispatch({ type: `@INIT ${stateKey} reducer` });
        }

        if (needDeleteAfterUnmount) {
            return () => {
                store.reducerManager.remove(stateKey);
            };
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};
