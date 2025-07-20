import { PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
    id: string;
    username: string;
    password: string;
    _initialed: boolean;
}

export interface User {
    id: string;
    username: string;
    password: string;
}

export type UserPayLoadAction = PayloadAction<User>;
