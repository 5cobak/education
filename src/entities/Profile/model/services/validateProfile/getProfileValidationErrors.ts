import { ProfileData } from 'src/entities/Profile';
import { ProfileValidationError } from '../../../types';
import { ApiError } from 'src/shared/api';

export const getProfileValidationErrors = (
    data?: ProfileData,
    anotherErrors?: (ProfileValidationError | ApiError)[]
): (ProfileValidationError | ApiError)[] => {
    let errors: (ProfileValidationError | ApiError)[] = [];

    if (anotherErrors) {
        errors = errors.concat(anotherErrors);
    }

    if (!data) {
        errors.push(ProfileValidationError.NO_DATA);
    }

    if (!data?.firstName) {
        errors.push(ProfileValidationError.INCORRECT_FIRST_NAME);
    }

    if (!data?.lastName) {
        errors.push(ProfileValidationError.INCORRECT_LAST_NAME);
    }

    if (!data?.username) {
        errors.push(ProfileValidationError.INCORRECT_USER_NAME);
    }

    return errors;
};
