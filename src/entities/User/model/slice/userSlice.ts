import { createSlice } from '@reduxjs/toolkit';
import { UserState, UserPayLoadAction } from '../../types';

const initialState: UserState = {
    id: '',
    username: '',
    password: '',
    _initialed: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: UserPayLoadAction) => {
            state.id = action.payload.id;
            state.username = action.payload.username;
            state.password = action.payload.password;
        },
        clearAuthData: (state) => {
            state.id = '';
            state.username = '';
            state.password = '';
        },
        initUser: (state) => {
            state._initialed = true;
        },
    },
});

export const userActions = userSlice.actions;

const userReducer = userSlice.reducer;

export default userReducer;
