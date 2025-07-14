import { ProfileData } from 'src/entities/Profile';

export interface ProfileCardState {
    formData: ProfileData;
    isLoading?: boolean;
    isEditable?: boolean;
    error?: ProfileValidationError | null;
}

export enum ProfileValidationError {
    NO_DATA = 'NO_DATA',
    INCORRECT_FIRST_NAME = 'INCORRECT_FIRST_NAME',
    INCORRECT_LAST_NAME = 'INCORRECT_LAST_NAME',
    INCORRECT_USER_NAME = 'INCORRECT_USER_NAME',
    SERVER_ERROR = 'SERVER_ERROR',
}
