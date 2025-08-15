import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'src/app/providers/StoreProvider';

import { ProfileData } from '../../../types';
import { profileActions } from '../../slice/profileSlice';
import { ApiError } from 'src/shared/api';

export const fetchProfileData = createAsyncThunk<ProfileData, string | undefined, ThunkConfig<ApiError>>(
    'profile/fetchProfileData',
    async (profileId, thunkAPI) => {
        const { extra, rejectWithValue, dispatch } = thunkAPI;
        try {
            const response = await extra.$Axios.get<ProfileData>(`/profile/${profileId}`);

            dispatch(profileActions.setProfileData(response.data));

            return response.data;
        } catch (e) {
            return rejectWithValue(ApiError.SERVER_ERROR);
        }
    }
);
