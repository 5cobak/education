import { selectProfileCardError } from './selectProfileCardError';

import { GlobalState } from 'src/app/providers/StoreProvider';

describe('test selectProfileCardError.test', () => {
    test('test return value', () => {
        const state: DeepPartial<GlobalState> = { profileCard: { error: { key: 'error' } } };

        expect(selectProfileCardError(state as GlobalState)).toEqual({ key: 'error' });
    });
});
