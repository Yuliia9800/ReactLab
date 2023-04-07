import axios from 'axios';

export const api = axios.create({
	baseURL: 'http://localhost:4000/',
	headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use(
	(config) => {
		const token = JSON.parse(localStorage.getItem('token'));

		config.headers['Authorization'] = token;

		return config;
	},
	(error) => Promise.reject(error)
);
