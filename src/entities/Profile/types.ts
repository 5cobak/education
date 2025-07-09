import { PayloadAction } from '@reduxjs/toolkit';
import { Message } from 'src/shared/utils/translationUtils';

export interface ProfileState {
    data: ProfileData;
    isLoading?: boolean;
    error?: Message | null;
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
