import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'src/app/providers/StoreProvider';
import { ProfileData } from 'src/entities/Profile';
import { Message } from 'src/shared/utils/translationUtils';
import { selectProfileCardFormData } from '../selectors/selectProfileCardFormData/selectProfileCardFormData';

export const editProfile = createAsyncThunk<ProfileData, void, ThunkConfig<Message>>('profile/editProfile', async (_, thunkApi) => {
	const { extra, rejectWithValue, getState } = thunkApi;

	try {
		const formData = selectProfileCardFormData(getState());
		const response = await extra.$Axios.put('/profile', formData);

		return response.data;
	}catch(e) {
		rejectWithValue({key: 'profileUpdate_error'});
	}
});
