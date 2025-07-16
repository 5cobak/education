import { GlobalState } from 'src/app/providers/StoreProvider';
import { selectProfileData } from './selectProfileData';

describe('test selectProfileData.test', () => {
    test('', () => {
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
            profile: { data: profileData },
        };
        expect(selectProfileData(state as GlobalState)).toEqual(profileData);
    });
});
