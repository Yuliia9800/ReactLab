import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { RootState } from 'store';

function PrivateRoute({ children }) {
	const role = useSelector((state: RootState) => state.user.role);

	if (role !== 'admin') {
		return <Navigate to='/courses' />;
	}

	return children;
}

export default PrivateRoute;
