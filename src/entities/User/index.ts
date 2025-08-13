export { selectUserInitialed } from './model/selectors/selectUserInitialed/selectUserInitialed';

export { selectUserName } from './model/selectors/selectUserName/selectUserName';

export { User, UserState, UserPayLoadAction as UserPayLoadChangeNameAction, UserPayLoadAction } from './types';
export { userActions, default as userReducer } from './model/slice/userSlice';
export { loginUser } from './model/services/loginUser';
