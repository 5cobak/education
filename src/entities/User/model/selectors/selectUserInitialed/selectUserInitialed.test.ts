import { selectUserInitialed } from './selectUserInitialed';

import { GlobalState } from 'src/app/providers/StoreProvider';

describe('test selectUserInitialed.test', () => {
    test('test return value', () => {
        const state: DeepPartial<GlobalState> = { user: { _initialed: false } };

        expect(selectUserInitialed(state as GlobalState)).toEqual(false);
    });
});
