import { createAsyncThunk } from '@reduxjs/toolkit';

import { loginAPI, logoutAPI, getUserAPI } from 'services';
import { UserState } from './userSlice';

export const login = createAsyncThunk<
	Omit<UserState, 'isAuth'>,
	{ email: string; password: string }
>('user/login', async ({ email, password }) => {
	const response = await loginAPI({ email, password });

	localStorage.setItem('token', JSON.stringify(response.data.result));

	return {
		name: response.data.user.name,
		email: response.data.user.email,
		token: response.data.result,
		role: response.data.role,
	};
});

export const logout = createAsyncThunk('user/logout', async () => {
	localStorage.removeItem('token');

	await logoutAPI();

	return null;
});

export const getUser = createAsyncThunk<Omit<UserState, 'token' | 'isAuth'>>(
	'user/get',
	async () => {
		const response = await getUserAPI();

		return response.data.result;
	}
);
