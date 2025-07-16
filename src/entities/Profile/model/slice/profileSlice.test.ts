import { ProfileData, ProfileState } from '../../types';
import profileReducer, { profileActions } from './profileSlice';

describe('test profileSlice.test', () => {
    const profileData: ProfileData = {
        firstName: 'Исмагиль',
        lastName: '5cobak',
        age: '32',
        currency: 'RUB',
        country: 'Russia',
        city: 'Samara',
        username: 'admin',
        avatar: 'https://i.pinimg.com/736x/44/7c/dd/447cdd33a5bfa514e225f79ad793f86b.jpg',
    };
    const state: DeepPartial<ProfileState> = {
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
    };

    test('test username change', () => {
        expect(profileReducer(undefined, profileActions.setProfileData(profileData))).toEqual(state);
    });
});
