import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../store/createStore';
import { GlobalState } from '../store/types';
import { DeepPartial } from '@reduxjs/toolkit';
import { initialState } from '../store/initialState';
interface Props {
  state?: DeepPartial<GlobalState>;
  children: ReactNode;
}

export const StoreProvider: React.FC<Props> = (props) => {
  const { children, state = initialState } = props;

  if (!state) {
    throw Error('initial state is not defined');
  }

  const store = createReduxStore(state as GlobalState);

  return <Provider store={store}>{children}</Provider>;
};
