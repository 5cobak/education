export { selectProfileError } from './model/selectors/selectProfileError/selectProfileError';
export { selectProfileIsLoading } from './model/selectors/selectProfileIsLoading/selectProfileIsLoading';

export { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
export { default as profileReducer } from './model/slice/profileSlice';
export { ProfileState, ProfileData } from './types';
export { selectProfileData } from './model/selectors/selectProfileData/selectProfileData';
