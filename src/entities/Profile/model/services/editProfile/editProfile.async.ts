import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'src/app/providers/StoreProvider';
import { ProfileData } from 'src/entities/Profile';

import { selectProfileForm } from '../../selectors/selectProfileForm/selectProfileForm';
import { ProfileValidationError } from '../../../types';

export const editProfile = createAsyncThunk<ProfileData, void, ThunkConfig<ProfileValidationError>>(
    'profile/editProfile',
    async (_, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;

        try {
            const form = selectProfileForm(getState());
            const response = await extra.$Axios.put('/profile', form);

            return response.data;
        } catch (e) {
            console.log(e);
            rejectWithValue(ProfileValidationError.SERVER_ERROR);
        }
    }
);
