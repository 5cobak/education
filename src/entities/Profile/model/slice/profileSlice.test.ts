import profileReducer, { profileActions } from './profileSlice';

describe('test profileSlice.test', () => {
    const data = {
        firstName: 'Исмагиль',
        lastName: '5cobak',
        age: '32',
        currency: 'RUB',
        country: 'Russia',
        city: 'Samara',
        username: 'admin',
        avatar: 'https://i.pinimg.com/736x/44/7c/dd/447cdd33a5bfa514e225f79ad793f86b.jpg',
    };

    test('test username change', () => {
        expect(profileReducer(undefined, profileActions.setProfileData(data))).toEqual({ data });
    });
});
