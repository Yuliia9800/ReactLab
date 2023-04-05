import { api } from 'helpers';
import { Course, Author } from 'types';

export const getCoursesAPI = () => api.get('courses/all');

export const addCourseAPI = (course: Omit<Course, 'id' | 'creationDate'>) =>
	api.post('courses/add', course);

export const updateCoursesAPI = (
	id: string,
	course: Omit<Course, 'id' | 'creationDate'>
) => api.put(`courses/${id}`, course);

export const deleteCourseAPI = (id: string) => api.delete(`courses/${id}`);

export const getAuthorsAPI = () => api.get('authors/all');

export const addAuthorAPI = (author: Author) => api.post('authors/add', author);

export const loginAPI = (user: { email: string; password: string }) =>
	api.post('login', user);

export const registrationAPI = (user: {
	email: string;
	name: string;
	password: string;
}) => api.post('register', user);

export const logoutAPI = () => api.delete('logout');

export const getUserAPI = () => api.get('users/me');
