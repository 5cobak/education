import { CounterState } from 'src/entities/Counter/model/slice/counterSlice';

export interface GlobalState {
  counter: CounterState;
}
