import { selectProfileLastName } from './selectProfileLastName';

import { GlobalState } from 'src/app/providers/StoreProvider';

describe('test selectprofileLastName.test', () => {
    test('test return value', () => {
        const state: DeepPartial<GlobalState> = { profile: { form: { lastName: 'Petrov' } } };
        expect(selectProfileLastName(state as GlobalState)).toEqual('Petrov');
    });
});
