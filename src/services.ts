import { api } from 'helpers';

export const getAllCourses = () => api.get('courses/all');
export const getAllAuthors = () => api.get('authors/all');
export const userLogin = (user: { email: string; password: string }) =>
	api.post('login', user);

export const userRegistration = (user: {
	email: string;
	name: string;
	password: string;
}) => api.post('register', user);
