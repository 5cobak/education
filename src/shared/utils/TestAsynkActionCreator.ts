import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';
import { AxiosStatic } from 'axios';
import { GlobalState } from 'src/app/providers/StoreProvider';

import axios from 'axios';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

type ActionCreatorType<Return, Arg, RejectedValue> = (
  arg: Arg
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

export class TestAsyncThunkActionCreator<ReturnType, ThunkArgs, ThunkApiConfig> {
  dispatch: Dispatch = jest.fn();
  private getState: () => GlobalState = jest.fn();
  $Axios: jest.MockedFunctionDeep<AxiosStatic>;
  private navigate = jest.fn();
  private asyncThunk: ActionCreatorType<ReturnType, ThunkArgs, ThunkApiConfig>;
  constructor(asyncThunk: ActionCreatorType<ReturnType, ThunkArgs, ThunkApiConfig>) {
    this.asyncThunk = asyncThunk;
    this.$Axios = mockedAxios;
  }

  callAsyncAction = async (args: ThunkArgs) => {
    const action = this.asyncThunk(args);
    const result = await action(this.dispatch, this.getState, {
      $Axios: this.$Axios,
      navigate: this.navigate,
    });
    return result;
  };
}
