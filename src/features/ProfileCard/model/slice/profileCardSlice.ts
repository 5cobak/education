import { createSlice } from '@reduxjs/toolkit';
import { ProfileCardState } from '../types';

export const initialState: ProfileCardState = {
  formData: {
    firstName: '',
    lastName: '',
    age: undefined,
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
    setProfileFirstName: (state, action) => {
      state.formData.firstName = action.payload;
    },
    setProfileLastName: (state, action) => {
      state.formData.lastName = action.payload;
    },
    setProfileAge: (state, action) => {
      state.formData.age = action.payload;
    },
    setProfileCountry: (state, action) => {
      state.formData.currency = action.payload;
    },
    setProfileCurrency: (state, action) => {
      state.formData.country = action.payload;
    },
    setProfileCity: (state, action) => {
      state.formData.city = action.payload;
    },
    setProfileUsername: (state, action) => {
      state.formData.username = action.payload;
    },
    setProfileAvatar: (state, action) => {
      state.formData.avatar = action.payload;
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

export const profileCardActions = profileCardSlice.actions;

const profileCardReducer = profileCardSlice.reducer;

export default profileCardReducer;
