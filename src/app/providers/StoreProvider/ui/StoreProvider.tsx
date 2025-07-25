import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../store/createStore';
import { GlobalState } from '../store/types';
import { initialState } from '../store/initialState';
import { ReducersMapObject } from '@reduxjs/toolkit';
interface Props {
    children: ReactNode;
    // state need for storybook
    state?: DeepPartial<GlobalState>;

    asyncReducers?: DeepPartial<ReducersMapObject<GlobalState>>;
}

export const StoreProvider: React.FC<Props> = (props) => {
    const { children, state = initialState } = props;

    if (!state) {
        throw Error('initial state is not defined');
    }

    const store = createReduxStore(state as GlobalState, props.asyncReducers as ReducersMapObject<GlobalState>);

    return <Provider store={store}>{children}</Provider>;
};
