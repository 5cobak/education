import { selectProfileInitialed } from './selectProfileInitialed';

import { GlobalState } from 'src/app/providers/StoreProvider';

describe('test selectProfileInitialed.test', () => {
    test('test return value', () => {
        const state: DeepPartial<GlobalState> = { profile: { _initialed: false } };

        expect(selectProfileInitialed(state as GlobalState)).toEqual(false);
    });
});
