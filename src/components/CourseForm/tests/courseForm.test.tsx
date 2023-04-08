import React from 'react';
import { fireEvent, renderWithProviders, screen } from 'testing';
import CourseForm from '../CourseForm';

test('should show authors lists (all and course authors)', () => {
	renderWithProviders(<CourseForm />);

	expect(screen.getByText('Authors')).toBeInTheDocument();
	expect(screen.getByText('Course authors')).toBeInTheDocument();
});
