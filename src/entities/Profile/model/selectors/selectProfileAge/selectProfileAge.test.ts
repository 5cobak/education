import { selectProfileAge } from './selectProfileAge';

import { GlobalState } from 'src/app/providers/StoreProvider';

describe('test selectprofileAge.test', () => {
    test('test return value', () => {
        const state: DeepPartial<GlobalState> = { profile: { form: { age: '32' } } };

        expect(selectProfileAge(state as GlobalState)).toEqual('32');
    });
});
