import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ProfilePayLoadAction, ProfileState } from '../../types';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { editProfile } from '../services/editProfile/editProfile.async';

export const initialState: ProfileState = {
    _initialed: false,
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
    form: {
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
            state.form = action.payload;
        },
        setProfileFirstName: (state, action: PayloadAction<string>) => {
            state.form.firstName = action.payload;
        },
        setProfileLastName: (state, action: PayloadAction<string>) => {
            state.form.lastName = action.payload;
        },
        setProfileAge: (state, action: PayloadAction<string>) => {
            state.form.age = action.payload;
        },
        setProfileCountry: (state, action: PayloadAction<string>) => {
            state.form.country = action.payload;
        },
        setProfileCurrency: (state, action: PayloadAction<string>) => {
            state.form.currency = action.payload;
        },
        setProfileCity: (state, action: PayloadAction<string>) => {
            state.form.city = action.payload;
        },
        setProfileUsername: (state, action: PayloadAction<string>) => {
            state.form.username = action.payload;
        },
        setProfileAvatar: (state, action: PayloadAction<string>) => {
            state.form.avatar = action.payload;
        },
        editProfile: (state) => {
            state.isEditable = true;
        },
        cancelEditProfile: (state) => {
            state.isEditable = false;
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
                state._initialed = true;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                state._initialed = true;
            })
            .addCase(editProfile.pending, (state) => {
                state.error = null;
                state.isEditable = false;
                state.isLoading = true;
            })
            .addCase(editProfile.fulfilled, (state, action) => {
                state.isLoading = false;
                state.form = action.payload;
            })
            .addCase(editProfile.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const profileActions = profileSlice.actions;

const profileReducer = profileSlice.reducer;

export default profileReducer;
