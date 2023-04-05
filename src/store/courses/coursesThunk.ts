import { createAsyncThunk } from '@reduxjs/toolkit';

import {
	getCoursesAPI,
	addCourseAPI,
	updateCoursesAPI,
	deleteCourseAPI,
} from 'services';
import { Course, CoursesList } from 'types';

export const getCourses = createAsyncThunk<CoursesList>(
	'courses/get',
	async () => {
		const response = await getCoursesAPI();

		return response.data.result;
	}
);

export const addCourse = createAsyncThunk<Course, Course>(
	'courses/add',
	async (course) => {
		const response = await addCourseAPI(course);

		return response.data.result;
	}
);

export const updateCourse = createAsyncThunk<Course, Course>(
	'courses/update',
	async (course) => {
		const { id, title, description, duration, authors } = course;

		const response = await updateCoursesAPI(id, {
			title,
			description,
			duration,
			authors,
		});

		return response.data.result;
	}
);

export const deleteCourse = createAsyncThunk<string, string>(
	'courses/delete',
	async (id) => {
		await deleteCourseAPI(id);

		return id;
	}
);
