import { GlobalState } from 'src/app/providers/StoreProvider';
import { selectProfileError } from './selectProfileError';

describe('test selectProfileError.test', () => {
  test('test get error field', () => {
    const state: DeepPartial<GlobalState> = {
      profile: {
        error: { key: '123' },
      },
    };
    expect(selectProfileError(state as GlobalState)).toEqual({ key: '123' });
  });
});
