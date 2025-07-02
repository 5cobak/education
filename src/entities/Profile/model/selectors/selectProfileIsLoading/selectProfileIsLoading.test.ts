import { DeepPartial } from '@reduxjs/toolkit';
import { GlobalState } from 'src/app/providers/StoreProvider';
import { selectProfileIsLoading } from './selectProfileIsLoading';

describe('test selectProfileIsLoading.test', () => {
  test('test get isLoading field', () => {
    const state: DeepPartial<GlobalState> = {
      profile: {
        isLoading: false,
      },
    };
    expect(selectProfileIsLoading(state as GlobalState)).toEqual(false);
  });
});
