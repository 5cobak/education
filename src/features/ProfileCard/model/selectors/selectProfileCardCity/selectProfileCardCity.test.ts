import { selectProfileCardCity } from './selectProfileCardCity';

import { GlobalState } from 'src/app/providers/StoreProvider';

describe('test selectProfileCardCity.test', () => {
  test('test return value', () => {
    const state: DeepPartial<GlobalState> = { profileCard: { formData: { city: 'Moscow' } } };

    expect(selectProfileCardCity(state as GlobalState)).toEqual('Moscow');
  });
});
