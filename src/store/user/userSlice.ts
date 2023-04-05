import { createSlice } from '@reduxjs/toolkit';

import { login, logout, getUser } from './userThunk';

export interface UserState {
	isAuth: boolean;
	name: string;
	email: string;
	token: string;
	role: string;
}

const initialState: UserState = {
	isAuth: false,
	name: '',
	email: '',
	token: JSON.parse(localStorage.getItem('token')) || '',
	role: '',
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(login.fulfilled, (state, action) => {
			state.email = action.payload.email;
			state.name = action.payload.name;
			state.token = action.payload.token;
			state.isAuth = true;
			state.role = action.payload.role;
		});
		builder.addCase(logout.fulfilled, (state) => {
			state.isAuth = false;
			state.email = '';
			state.name = '';
			state.token = '';
			state.role = '';
		});
		builder.addCase(getUser.fulfilled, (state, action) => {
			state.email = action.payload.email;
			state.name = action.payload.name;
			state.role = action.payload.role;
		});
	},
});

export default userSlice.reducer;
