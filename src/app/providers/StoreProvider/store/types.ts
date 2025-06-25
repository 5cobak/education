import { CounterState } from 'src/entities/Counter/model/slice/counterSlice';
import { UserState } from 'src/entities/User';

export interface GlobalState {
  counter: CounterState;
  user: UserState;
}
