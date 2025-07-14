import { GlobalState } from 'src/app/providers/StoreProvider';
import { selectProfileCardUserName } from './selectProfileCardUsername';

describe('test selectProfileUserName.test', () => {
    test('', () => {
        const state: DeepPartial<GlobalState> = {
            profileCard: {
                formData: {
                    username: 'admin',
                },
            },
        };
        expect(selectProfileCardUserName(state as GlobalState)).toEqual('admin');
    });
});
