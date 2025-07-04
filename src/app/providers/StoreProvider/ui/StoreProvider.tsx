import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../store/createStore';
import { GlobalState } from '../store/types';
import { initialState } from '../store/initialState';
import { useNavigate } from 'react-router-dom';
interface Props {
  state?: DeepPartial<GlobalState>;
  children: ReactNode;
}

export const StoreProvider: React.FC<Props> = (props) => {
  const { children, state = initialState } = props;
  const navigation = useNavigate();

  if (!state) {
    throw Error('initial state is not defined');
  }

  const store = createReduxStore(state as GlobalState, navigation);

  return <Provider store={store}>{children}</Provider>;
};
