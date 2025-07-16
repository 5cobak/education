import { selectProfileForm } from './selectProfileForm';

import { GlobalState } from 'src/app/providers/StoreProvider';

describe('test selectprofileform.test', () => {
    test('test return value', () => {
        const state: DeepPartial<GlobalState> = {
            profile: {
                form: {
                    firstName: 'isma',
                    lastName: 'arslanov',
                    city: 'Kazan',
                },
            },
        };

        expect(selectProfileForm(state as GlobalState)).toEqual({
            firstName: 'isma',
            lastName: 'arslanov',
            city: 'Kazan',
        });
    });
});
