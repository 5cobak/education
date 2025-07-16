import { PayloadAction } from '@reduxjs/toolkit';
import { ApiError } from 'src/shared/api';

export interface ProfileState {
    data: ProfileData;
    form: ProfileData;
    isLoading?: boolean;
    isEditable?: boolean;
    error?: ApiError | ProfileValidationError | null;
}

export interface ProfileData {
    firstName: string;
    lastName: string;
    age: string;
    currency: string;
    country: string;
    city: string;
    username: string;
    avatar: string;
}

export type ProfilePayLoadAction = PayloadAction<ProfileData>;

export enum ProfileValidationError {
    NO_DATA = 'NO_DATA',
    INCORRECT_FIRST_NAME = 'INCORRECT_FIRST_NAME',
    INCORRECT_LAST_NAME = 'INCORRECT_LAST_NAME',
    INCORRECT_USER_NAME = 'INCORRECT_USER_NAME',
    SERVER_ERROR = 'SERVER_ERROR',
}
