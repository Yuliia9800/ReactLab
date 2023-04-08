import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { RootState, setupStore } from 'store';

const mockedState: RootState = {
	user: {
		isAuth: false,
		name: '',
		email: '',
		token: '',
		role: '',
	},
	courses: [],
	authors: [],
};

export const renderWithProviders = (
	ui,
	{ state = {}, route = '/', options = {} } = {}
) => {
	const store = setupStore({ ...mockedState, ...state });

	const Providers = ({ children }) => {
		return (
			<Provider store={store}>
				<MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>
			</Provider>
		);
	};

	return render(ui, { wrapper: Providers, ...options });
};

// re-export everything
export * from '@testing-library/react';
