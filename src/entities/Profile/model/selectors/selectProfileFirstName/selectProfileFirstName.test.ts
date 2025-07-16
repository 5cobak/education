import { GlobalState } from 'src/app/providers/StoreProvider';
import { selectProfileFirstName } from './selectProfileFirstName';

describe('test selectProfileUserName.test', () => {
    test('', () => {
        const state: DeepPartial<GlobalState> = {
            profile: {
                form: {
                    firstName: 'Петр',
                },
            },
        };
        expect(selectProfileFirstName(state as GlobalState)).toEqual('Петр');
    });
});
