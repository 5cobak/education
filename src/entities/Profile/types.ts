import { PayloadAction } from '@reduxjs/toolkit';
import { ApiError } from 'src/shared/api';

export interface ProfileState {
    data: ProfileData;
    isLoading?: boolean;
    error?: ApiError | null;
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
