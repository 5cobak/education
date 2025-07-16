import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'src/app/providers/StoreProvider';

import { ProfileData } from '../../../types';
import { profileActions } from '../../slice/profileSlice';
import { ApiError } from 'src/shared/api';

export const fetchProfileData = createAsyncThunk<ProfileData, void, ThunkConfig<ApiError>>(
    'profile/fetchProfileData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, dispatch } = thunkAPI;
        try {
            const response = await extra.$Axios.get<ProfileData>('/profile');
            dispatch(profileActions.setProfileData(response.data));

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue(ApiError.SERVER_ERROR);
        }
    }
);
