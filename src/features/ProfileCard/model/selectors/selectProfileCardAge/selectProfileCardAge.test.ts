import { selectProfileCardAge } from './selectProfileCardAge';

import { GlobalState } from 'src/app/providers/StoreProvider';

describe('test selectProfileCardAge.test', () => {
    test('test return value', () => {
        const state: DeepPartial<GlobalState> = { profileCard: { formData: { age: '32' } } };

        expect(selectProfileCardAge(state as GlobalState)).toEqual('32');
    });
});
