import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import {
	Header,
	CourseInfo,
	Courses,
	CourseForm,
	Login,
	Registration,
	PrivateRoute,
} from 'components';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

function App() {
	const navigate = useNavigate();
	const token = useSelector((state: RootState) => state.user.token);

	useEffect(() => {
		if (token) {
			navigate('/courses');
		} else {
			navigate('/login');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<Header />
			<Routes>
				<Route path='/'>
					<Route path='/login' element={<Login />} />
					<Route path='/registration' element={<Registration />} />
					<Route path='/courses'>
						<Route index element={<Courses />} />

						<Route
							path='/courses/add'
							element={
								<PrivateRoute>
									<CourseForm />
								</PrivateRoute>
							}
						/>

						<Route
							path='/courses/update/:courseId'
							element={
								<PrivateRoute>
									<CourseForm />
								</PrivateRoute>
							}
						/>
						<Route path='/courses/:courseId' element={<CourseInfo />} />
					</Route>
				</Route>
			</Routes>
		</>
	);
}

export default App;
