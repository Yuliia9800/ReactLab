import { createSlice } from '@reduxjs/toolkit';

import { CoursesList } from 'types';
import {
	getCourses,
	deleteCourse,
	addCourse,
	updateCourse,
} from './coursesThunk';

const initialState: CoursesList = [];

export const coursesSlice = createSlice({
	name: 'courses',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getCourses.fulfilled, (state, action) => {
			return (state = action.payload);
		});

		builder.addCase(addCourse.fulfilled, (state, action) => {
			state.push(action.payload);
		});

		builder.addCase(updateCourse.fulfilled, (state, action) => {
			const index = state.findIndex(({ id }) => id === action.payload.id);

			state[index] = action.payload;
		});

		builder.addCase(deleteCourse.fulfilled, (state, action) => {
			return state.filter((course) => course.id !== action.payload);
		});
	},
});

export default coursesSlice.reducer;
