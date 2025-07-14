import { ProfileValidationError } from '../../types';
import { selectProfileCardError } from './selectProfileCardError';

import { GlobalState } from 'src/app/providers/StoreProvider';

describe('test selectProfileCardError.test', () => {
    test('test return value', () => {
        const state: DeepPartial<GlobalState> = { profileCard: { error: ProfileValidationError.INCORRECT_FIRST_NAME } };

        expect(selectProfileCardError(state as GlobalState)).toEqual(ProfileValidationError.INCORRECT_FIRST_NAME);
    });
});
