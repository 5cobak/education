import { PayloadAction } from '@reduxjs/toolkit';
import { Message } from 'src/shared/utils/translationWrapper';

export interface LoginState {
  username: string;
  password: string;
  isLoading?: boolean;
  error?: null | Message;
}

export type LoginUsernamePayload = PayloadAction<string>;
export type LoginPasswordPayload = PayloadAction<string>;
