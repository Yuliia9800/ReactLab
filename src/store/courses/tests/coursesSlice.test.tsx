import React from 'react';
import { coursesSlice } from '../coursesSlice';
import { addCourse, getCourses, updateCourse } from '../coursesThunk';

test('should return the initial state', () => {
	expect(coursesSlice.reducer(undefined, { type: undefined })).toEqual([]);
});

test('should handle GET_COURSES and returns new state', () => {
	const courses = [{ id: '1', title: 'title1' }];

	expect(
		coursesSlice.reducer(undefined, {
			type: getCourses.fulfilled,
			payload: courses,
		})
	).toEqual(courses);
});

test('should handle ADD_COURSE and returns new state', () => {
	const initState = [{ id: '1', title: 'title1' }] as any;
	const course = { id: '2', title: 'title2' };

	expect(
		coursesSlice.reducer(initState, {
			type: addCourse.fulfilled,
			payload: course,
		})
	).toEqual([...initState, course]);
});
