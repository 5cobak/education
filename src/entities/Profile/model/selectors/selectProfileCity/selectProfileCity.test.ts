import { selectProfileCity } from './selectProfileCity';

import { GlobalState } from 'src/app/providers/StoreProvider';

describe('test selectprofileCity.test', () => {
    test('test return value', () => {
        const state: DeepPartial<GlobalState> = { profile: { form: { city: 'Moscow' } } };

        expect(selectProfileCity(state as GlobalState)).toEqual('Moscow');
    });
});
