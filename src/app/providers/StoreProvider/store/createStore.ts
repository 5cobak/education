import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import counterReducer from 'src/entities/Counter/model/slice/counterSlice';
import { GlobalState, ThunExtra } from './types';
import { CombinedState, Reducer } from '@reduxjs/toolkit';
import { createReducerManager } from './ReducerManager/ReducerManager';
import { $Axios } from 'src/shared/api';
import { userReducer } from 'src/entities/User';

const initialReducers: ReducersMapObject<GlobalState> = {
    counter: counterReducer,
    user: userReducer,
};

export function createReduxStore(initialState: GlobalState, asyncReducers: ReducersMapObject<GlobalState>) {
    const reducerManager = createReducerManager({ ...initialReducers, ...asyncReducers });

    const extraArgument: ThunExtra = {
        $Axios,
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<GlobalState>>,
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
