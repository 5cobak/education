import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/createStore';

interface Props {
  store: typeof store;
  children: ReactNode;
}

export const StoreProvider: React.FC<Props> = (props) => {
  return <Provider store={props.store}>{props.children}</Provider>;
};
