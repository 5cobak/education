import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';
import { GlobalState } from 'src/app/providers/StoreProvider/store/types';

type ActionCreatorType<Return, Arg, RejectedValue> = (
  arg: Arg
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

export class TestAsyncThunkActionCreator<ReturnType, ThunkArgs, ThunkApiConfig> {
  dispatch: Dispatch;
  private getState: () => GlobalState;
  private asyncThunk: ActionCreatorType<ReturnType, ThunkArgs, ThunkApiConfig>;
  constructor(asyncThunk: ActionCreatorType<ReturnType, ThunkArgs, ThunkApiConfig>) {
    this.asyncThunk = asyncThunk;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
  }

  callAsyncAction = async (args: ThunkArgs) => {
    const action = this.asyncThunk(args);
    const result = await action(this.dispatch, this.getState, undefined);
    return result;
  };
}
