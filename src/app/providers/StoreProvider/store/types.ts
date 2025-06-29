import { CounterState } from 'src/entities/Counter/model/slice/counterSlice';
import { UserState } from 'src/entities/User';
import { LoginState } from 'src/features/AuthByPassword/modal/types';

export interface GlobalState {
  counter: CounterState;
  user: UserState;
  login: LoginState;
}
