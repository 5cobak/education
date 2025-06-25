export interface LoginState {
  username: string;
  password: string;
  isLoading?: boolean;
  error?: null | string;
}
