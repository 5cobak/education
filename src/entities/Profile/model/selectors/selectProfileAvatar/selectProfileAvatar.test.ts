import { selectProfileAvatar } from './selectProfileAvatar';

import { GlobalState } from 'src/app/providers/StoreProvider';

describe('test selectProfileAvatar.test', () => {
    test('test return value', () => {
        const state: DeepPartial<GlobalState> = { profile: { form: { avatar: ':)' } } };

        expect(selectProfileAvatar(state as GlobalState)).toEqual(':)');
    });
});
