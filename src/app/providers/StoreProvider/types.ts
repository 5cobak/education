import { CounterState } from 'src/app/entities/Counter/model/slice/counterSlice';

export interface GlobalState {
  counter: CounterState;
}
