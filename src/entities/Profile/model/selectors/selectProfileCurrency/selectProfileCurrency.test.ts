import { selectProfileCurrency } from './selectProfileCurrency';

import { GlobalState } from 'src/app/providers/StoreProvider';

describe('test selectprofileCurrency.test', () => {
    test('test return value', () => {
        const state: DeepPartial<GlobalState> = { profile: { form: { currency: 'RUB' } } };

        expect(selectProfileCurrency(state as GlobalState)).toEqual('RUB');
    });
});
