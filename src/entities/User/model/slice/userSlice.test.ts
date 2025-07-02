import userReducer, { userActions } from './userSlice';

describe('test userSlice.test', () => {
  test('test user slice setUserData', () => {
    const user = { id: '1', username: '123', password: '123' };
    expect(userReducer(undefined, userActions.setAuthData(user))).toEqual(user);
  });
});
