import { createAsyncThunk } from '@reduxjs/toolkit';

import { loginAPI, logoutAPI, getUserAPI, registrationAPI } from 'services';
import { UserState } from './userSlice';

export const registration = createAsyncThunk<
	void,
	{ email: string; name: string; password: string }
>('user/registration', async ({ email, name, password }) => {
	await registrationAPI({ email, name, password });
});

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

export const logout = createAsyncThunk<void>('user/logout', async () => {
	await logoutAPI();

	localStorage.removeItem('token');
});

export const getUser = createAsyncThunk<Omit<UserState, 'token' | 'isAuth'>>(
	'user/get',
	async () => {
		const response = await getUserAPI();

		return response.data.result;
	}
);
