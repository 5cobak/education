import { TestAsyncThunkActionCreator } from 'src/shared/utils/TestAsynkActionCreator';

import { editProfile } from './editProfile.async';
import { ApiError } from 'src/shared/api';
import { GlobalState } from 'src/app/providers/StoreProvider';

describe('test editProfile.async.test', () => {
    const profileData = {
        firstName: 'Исмагиль',
        lastName: '5cobak',
        age: '32',
        currency: 'RUB',
        country: 'Russia',
        city: 'Samara',
        username: 'admin',
        avatar: 'https://i.pinimg.com/736x/44/7c/dd/447cdd33a5bfa514e225f79ad793f86b.jpg',
    };
    const state: DeepPartial<GlobalState> = {
        profile: {
            data: profileData,
            form: {
                firstName: '',
                lastName: '',
                age: '',
                currency: '',
                country: '',
                city: '',
                username: '',
                avatar: '',
            },
        },
    };

    test('test  success', async () => {
        const thunk = new TestAsyncThunkActionCreator(editProfile, state);
        thunk.$Axios.put.mockReturnValue(Promise.resolve({ data: profileData }));

        const result = await thunk.callAsyncAction();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(thunk.$Axios.put).toBeCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(profileData);
    });

    test.skip('test error', async () => {
        const thunk = new TestAsyncThunkActionCreator(editProfile, state);
        thunk.$Axios.put.mockReturnValue(Promise.resolve({ status: 500 }));
        const result = await thunk.callAsyncAction();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(thunk.$Axios.put).toBeCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual(ApiError.SERVER_ERROR);
    });
});
