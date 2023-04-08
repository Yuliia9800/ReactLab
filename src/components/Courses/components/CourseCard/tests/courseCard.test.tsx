import React from 'react';

import { renderWithProviders, screen } from 'testing';
import CourseCard from '../CourseCard';

test('should display correct props', () => {
	const props = {
		id: '1',
		title: 'title',
		description: 'description',
		authors: ['11'],
		duration: 70,
		creationDate: '10-10-2022',
	};

	const state = {
		authors: [
			{
				id: '11',
				name: 'author11',
			},
		],
	};

	renderWithProviders(<CourseCard {...props} />, { state });

	expect(screen.getByText(props.title)).toBeInTheDocument();
	expect(screen.getByText(props.description)).toBeInTheDocument();
	expect(screen.getByText('01:10 hours')).toBeInTheDocument();
	expect(screen.getByText('10.10.2022')).toBeInTheDocument();
	expect(screen.getByText('author11')).toBeInTheDocument();
});
