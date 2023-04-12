import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { fireEvent, renderWithProviders, screen } from 'testing';
import Courses from '../Courses';

const mockcourses = [
	{
		id: '1',
		title: 'title1',
		description: 'description1',
		creationDate: '10.10.2022',
		duration: '70',
		authors: ['author1,author2'],
	},
	{
		id: '3',
		title: 'title3',
		description: 'description3',
		creationDate: '10.10.2022',
		duration: '70',
		authors: ['2,4,'],
	},
];

test('should match snapshot', () => {
	const state = {
		courses: mockcourses,
	};
	const { container } = renderWithProviders(<Courses />, {
		state,
	});

	expect(container).toMatchSnapshot();
});

test('should display amount of CourseCard equal length of courses array', () => {
	const state = {
		courses: mockcourses,
	};

	renderWithProviders(<Courses />, { state });

	expect(screen.getAllByTestId('course')).toHaveLength(2);
});

test('should display Empty container if courses array length is 0', () => {
	const state = {
		courses: [],
	};

	renderWithProviders(<Courses />, { state });

	expect(screen.queryAllByTestId('course')).toHaveLength(0);
});

test('should be showed after a click on a button "Add new course"', () => {
	const state = {
		courses: [],
		user: {
			role: 'admin',
		},
	};

	renderWithProviders(
		<Routes>
			<Route path='/courses' element={<Courses />} />
			<Route path='/courses/add' element={<div>CourseForm</div>} />
		</Routes>,
		{ state, route: '/courses' }
	);

	const button = screen.getByRole('button', { name: /add new course/i });

	expect(button).toBeInTheDocument();

	fireEvent.click(button);

	expect(screen.getByText('CourseForm')).toBeInTheDocument();
});
