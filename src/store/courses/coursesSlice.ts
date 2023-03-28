import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { CoursesList, Course } from 'types';

const initialState: CoursesList = [];

export const coursesSlice = createSlice({
	name: 'courses',
	initialState,
	reducers: {
		getCourses: (state, action: PayloadAction<CoursesList>) => {
			state.push(...action.payload);
		},
		addCourse: (state, action: PayloadAction<Course>) => {
			state.push(action.payload);
		},
		updateCourse: (state, action: PayloadAction<string>) => {},
		deleteCourse: (state, action: PayloadAction<string>) => {
			return state.filter((course) => course.id !== action.payload);
		},
	},
});

export const { getCourses, addCourse, deleteCourse } = coursesSlice.actions;

export default coursesSlice.reducer;
