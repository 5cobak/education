import { selectProfileIsEditable } from './selectProfileIsEditable';

import { GlobalState } from 'src/app/providers/StoreProvider';

describe('test selectprofileIsEditable.test', () => {
    test('test return value', () => {
        const state: DeepPartial<GlobalState> = { profile: { isEditable: true } };

        expect(selectProfileIsEditable(state as GlobalState)).toEqual(true);
    });
});
