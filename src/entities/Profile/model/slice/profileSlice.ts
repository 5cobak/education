import { createSlice } from '@reduxjs/toolkit';

import { ProfilePayLoadAction, ProfileState } from '../../types';
import { fetchProfileData } from '../services/fetchProfileData';

export const initialState: ProfileState = {
    data: {
        firstName: '',
        lastName: '',
        age: '',
        currency: '',
        country: '',
        city: '',
        username: '',
        avatar: '',
    },
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfileData: (state, action: ProfilePayLoadAction) => {
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = null;
                state.isLoading = true;
            })
            .addCase(fetchProfileData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const profileActions = profileSlice.actions;

const profileReducer = profileSlice.reducer;

export default profileReducer;
