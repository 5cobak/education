import { UserState } from '../../types';
import userReducer, { userActions } from './userSlice';

describe('test userSlice.test', () => {
    test('test user slice setUserData', () => {
        const user: UserState = { id: '1', username: '123', password: '123', _initialed: false };
        expect(userReducer(undefined, userActions.setAuthData(user))).toEqual(user);
    });
});
