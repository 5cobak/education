import { selectProfileCountry } from './selectProfileCountry';

import { GlobalState } from 'src/app/providers/StoreProvider';

describe('test selectprofileCountry.test', () => {
    test('test return value', () => {
        const state: DeepPartial<GlobalState> = { profile: { form: { country: 'RUSSIA' } } };

        expect(selectProfileCountry(state as GlobalState)).toEqual('RUSSIA');
    });
});
