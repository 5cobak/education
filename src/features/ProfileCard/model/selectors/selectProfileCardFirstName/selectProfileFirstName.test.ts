import { GlobalState } from 'src/app/providers/StoreProvider';
import { selectProfileCardFirstName } from './selectProfileCardFirstName';

describe('test selectProfileUserName.test', () => {
    test('', () => {
        const state: DeepPartial<GlobalState> = {
            profileCard: {
                formData: {
                    firstName: 'Петр',
                },
            },
        };
        expect(selectProfileCardFirstName(state as GlobalState)).toEqual('Петр');
    });
});
