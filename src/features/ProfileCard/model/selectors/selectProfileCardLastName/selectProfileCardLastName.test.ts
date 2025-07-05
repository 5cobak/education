import { selectProfileCardLastName } from './selectProfileCardLastName';

import { GlobalState } from 'src/app/providers/StoreProvider';

describe('test selectProfileCardLastName.test', () => {
  test('test return value', () => {
    const state: DeepPartial<GlobalState> = { profileCard: { formData: { lastName: 'Petrov' } } };
    expect(selectProfileCardLastName(state as GlobalState)).toEqual('Petrov');
  });
});
