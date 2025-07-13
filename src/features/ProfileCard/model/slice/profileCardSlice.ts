import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProfileCardState } from '../types';
import { editProfile } from '../services/editProfile.asynk';
import { ProfileData } from 'src/entities/Profile';

export const initialState: ProfileCardState = {
    formData: {
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

export const profileCardSlice = createSlice({
    name: 'profileCard',
    initialState,
    reducers: {
        setProfileData: (state, action: PayloadAction<ProfileData>) => {
            state.formData = action.payload;
        },
        setProfileFirstName: (state, action: PayloadAction<string>) => {
            state.formData.firstName = action.payload;
        },
        setProfileLastName: (state, action: PayloadAction<string>) => {
            state.formData.lastName = action.payload;
        },
        setProfileAge: (state, action: PayloadAction<string>) => {
            state.formData.age = action.payload;
        },
        setProfileCountry: (state, action: PayloadAction<string>) => {
            state.formData.country = action.payload;
        },
        setProfileCurrency: (state, action: PayloadAction<string>) => {
            state.formData.currency = action.payload;
        },
        setProfileCity: (state, action: PayloadAction<string>) => {
            state.formData.city = action.payload;
        },
        setProfileUsername: (state, action: PayloadAction<string>) => {
            state.formData.username = action.payload;
        },
        setProfileAvatar: (state, action: PayloadAction<string>) => {
            state.formData.avatar = action.payload;
        },
        editProfile: (state) => {
            state.isEditable = true;
        },
        cancelEditableProfile: (state) => {
            state.isEditable = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(editProfile.pending, (state) => {
                state.error = null;
                state.isEditable = false;
                state.isLoading = true;
            })
            .addCase(editProfile.fulfilled, (state, action) => {
                state.isLoading = false;
                state.formData = action.payload;
            })
            .addCase(editProfile.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const profileCardActions = profileCardSlice.actions;

const profileCardReducer = profileCardSlice.reducer;

export default profileCardReducer;
