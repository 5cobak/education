import { selectProfileCardIsLoading } from './selectProfileCardIsLoading';

import { GlobalState } from 'src/app/providers/StoreProvider';

describe('test selectProfileCardIsLoading.test', () => {
    test('test return value', () => {
        const state: DeepPartial<GlobalState> = { profileCard: { isLoading: true } };

        expect(selectProfileCardIsLoading(state as GlobalState)).toEqual(true);
    });
});
