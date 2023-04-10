import React from 'react';

import { renderWithProviders, screen } from 'testing';
import Header from '../Header';

const state = {
	user: {
		name: 'Yuliia',
		token: 'token',
	},
};

test('should match snapshot', () => {
	const { container } = renderWithProviders(<Header />, {
		state,
	});

	expect(container).toMatchSnapshot();
});

test("should have logo and user's name", () => {
	renderWithProviders(<Header />, {
		state,
	});

	expect(screen.getByText('Yuliia')).toBeInTheDocument();
	expect(screen.getByRole('img', { name: /logo/i })).toBeInTheDocument();
});
