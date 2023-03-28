import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
	isAuth: boolean;
	name: string;
	email: string;
	token: string;
}

const initialState: UserState = {
	isAuth: false,
	name: '',
	email: '',
	token: localStorage.getItem('token') || '',
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		login: (state, action: PayloadAction<Omit<UserState, 'isAuth'>>) => {
			state.email = action.payload.email;
			state.name = action.payload.name;
			state.token = action.payload.token;
			state.isAuth = true;
		},
		logout: (state) => {
			state.isAuth = false;
			state.email = '';
			state.name = '';
			state.token = '';
		},
	},
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
