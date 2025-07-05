import { selectProfileCardAvatar } from './selectProfileCardAvatar';

import { GlobalState } from 'src/app/providers/StoreProvider';

describe('test selectProfileCardAvatar.test', () => {
  test('test return value', () => {
    const state: DeepPartial<GlobalState> = { profileCard: { formData: { country: ':)' } } };

    expect(selectProfileCardAvatar(state as GlobalState)).toEqual(':)');
  });
});
