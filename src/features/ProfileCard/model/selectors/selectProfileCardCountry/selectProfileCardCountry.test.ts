import { selectProfileCardCountry } from './selectProfileCardCountry';

import { GlobalState } from 'src/app/providers/StoreProvider';

describe('test selectProfileCardCountry.test', () => {
  test('test return value', () => {
    const state: DeepPartial<GlobalState> = { profileCard: { formData: { country: 'RUSSIA' } } };

    expect(selectProfileCardCountry(state as GlobalState)).toEqual('RUSSIA');
  });
});
