import { createAsyncThunk } from '@reduxjs/toolkit';

import { Message } from 'src/shared/utils/translationUtils';
import { ThunkConfig } from 'src/app/providers/StoreProvider';

import { ProfileData } from '../../types';
import { profileActions } from '../slice/profileSlice';

export const fetchProfileData = createAsyncThunk<ProfileData, void, ThunkConfig<Message>>(
    'profile/fetchProfileData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, dispatch } = thunkAPI;
        try {
            const response = await extra.$Axios.get<ProfileData>('/profile');
            dispatch(profileActions.setProfileData(response.data));
            dispatch(profileActions.setProfileData(response.data));

            return response.data;
        } catch (e) {
            return rejectWithValue({ key: 'fetchProfileData_fail' });
        }
    }
);
