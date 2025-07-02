import loginReducer, { loginActions } from './loginSlice';

describe('test loginSlice.test', () => {
  test('test username change', () => {
    expect(loginReducer(undefined, loginActions.setUsername('Loki'))).toEqual({ username: 'Loki', password: '' });
  });
  test('test password change', () => {
    expect(loginReducer(undefined, loginActions.setPassword('123'))).toEqual({ username: '', password: '123' });
  });
});
