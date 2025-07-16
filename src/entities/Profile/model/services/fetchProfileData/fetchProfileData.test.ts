import { TestAsyncThunkActionCreator } from 'src/shared/utils/TestAsynkActionCreator';

import { fetchProfileData } from './fetchProfileData';
import { profileActions } from '../../slice/profileSlice';
import { ApiError } from 'src/shared/api';

describe('test fetchProfileData.test', () => {
    test('test  success', async () => {
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
        const thunk = new TestAsyncThunkActionCreator(fetchProfileData);
        thunk.$Axios.get.mockReturnValue(Promise.resolve({ data: profileData }));

        const result = await thunk.callAsyncAction();

        expect(thunk.dispatch).toHaveBeenCalledWith(profileActions.setProfileData(profileData));
        expect(thunk.dispatch).toBeCalledTimes(3);
        expect(thunk.$Axios.get).toBeCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(profileData);
    });

    test.skip('test  error', async () => {
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

        const thunk = new TestAsyncThunkActionCreator(fetchProfileData);
        thunk.$Axios.get.mockReturnValue(Promise.resolve({ status: 401 }));
        const result = await thunk.callAsyncAction();

        // expect(thunk.dispatch).toBeCalledTimes(2);
        expect(thunk.$Axios.get).toBeCalled();
        expect(thunk.dispatch).not.toHaveBeenCalledWith(profileActions.setProfileData(profileData));
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual(ApiError.SERVER_ERROR);
    });
});
