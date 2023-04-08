import React from 'react';

import { renderWithProviders, screen } from 'testing';
import Header from '../Header';

test("should have logo and user's name", () => {
	const state = {
		user: {
			name: 'Yuliia',
			token: 'token',
		},
	};

	renderWithProviders(<Header />, {
		state,
	});

	expect(screen.getByText('Yuliia')).toBeInTheDocument();
	expect(screen.getByRole('img', { name: /logo/i })).toBeInTheDocument();
});
