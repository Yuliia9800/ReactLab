import React from 'react';
import { renderWithProviders, screen } from 'testing';
import CourseForm from '../CourseForm';

test('should match snapshot', () => {
	const { container } = renderWithProviders(<CourseForm />);

	expect(container).toMatchSnapshot();
});

test('should show authors lists (all and course authors)', () => {
	renderWithProviders(<CourseForm />);

	expect(screen.getByText('Authors')).toBeInTheDocument();
	expect(screen.getByText('Course authors')).toBeInTheDocument();
});
