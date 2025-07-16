import { GlobalState } from 'src/app/providers/StoreProvider';
import { selectProfileUserName } from './selectProfileUsername';

describe('test selectProfileUserName.test', () => {
    test('', () => {
        const state: DeepPartial<GlobalState> = {
            profile: {
                form: {
                    username: 'admin',
                },
            },
        };
        expect(selectProfileUserName(state as GlobalState)).toEqual('admin');
    });
});
