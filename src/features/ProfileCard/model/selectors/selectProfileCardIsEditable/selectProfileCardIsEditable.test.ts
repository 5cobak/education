import { selectProfileCardIsEditable } from './selectProfileCardIsEditable';

import { GlobalState } from 'src/app/providers/StoreProvider';

describe('test selectProfileCardIsEditable.test', () => {
    test('test return value', () => {
        const state: DeepPartial<GlobalState> = { profileCard: { isEditable: true } };

        expect(selectProfileCardIsEditable(state as GlobalState)).toEqual(true);
    });
});
