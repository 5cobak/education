import { selectProfileCardCurrency } from './selectProfileCardCurrency';

import { GlobalState } from 'src/app/providers/StoreProvider';

describe('test selectProfileCardCurrency.test', () => {
  test('test return value', () => {
    const state: DeepPartial<GlobalState> = { profileCard: { formData: { currency: 'RUB' } } };

    expect(selectProfileCardCurrency(state as GlobalState)).toEqual('RUB');
  });
});
