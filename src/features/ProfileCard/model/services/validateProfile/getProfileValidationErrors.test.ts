import { ProfileData } from 'src/entities/Profile';
import { getProfileValidationErrors } from './getProfileValidationErrors';
import { ProfileValidationError } from '../../types';
import { ApiError } from 'src/shared/api';

describe('test validateProfile.test', () => {
    test('test first and last name validation', () => {
        const profileData: DeepPartial<ProfileData> = {};

        const errors = getProfileValidationErrors(profileData as ProfileData);
        expect(errors).toEqual([
            ProfileValidationError.INCORRECT_FIRST_NAME,
            ProfileValidationError.INCORRECT_LAST_NAME,
            ProfileValidationError.INCORRECT_USER_NAME,
        ]);
    });

    test('test no data', () => {
        const errors = getProfileValidationErrors();
        expect(errors).toEqual([ProfileValidationError.NO_DATA]);
    });

    test('test with additional error', () => {
        const data: DeepPartial<ProfileData> = {
            firstName: 'ilon',
            lastName: 'mask',
            username: 'ironman',
        };
        const errors = getProfileValidationErrors(data as ProfileData, [ApiError.AUTH_ERROR]);
        expect(errors).toEqual([ApiError.AUTH_ERROR]);
    });
});
