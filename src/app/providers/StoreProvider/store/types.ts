import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';

import { AxiosInstance } from 'axios';
import { NavigateOptions, To } from 'react-router-dom';

import { CounterState } from 'src/entities/Counter/model/slice/counterSlice';
import { ProfileState } from 'src/entities/Profile';
import { UserState } from 'src/entities/User';
import { LoginState } from 'src/features/AuthByPassword';

export interface GlobalState {
    counter: CounterState;
    user: UserState;
    login?: LoginState;
    profile?: ProfileState;
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
    state: GlobalState;
}

export interface ThunExtra {
    $Axios: AxiosInstance;
}

export type NavigationFunction = (to: To, options?: NavigateOptions) => void;
