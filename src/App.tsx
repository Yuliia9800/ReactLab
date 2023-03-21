import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import {
	Header,
	CourseInfo,
	Courses,
	CreateCourse,
	Login,
	Registration,
} from 'components';

function App() {
	const navigate = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem('token');

		if (token) {
			navigate('/courses');
		} else {
			navigate('/login');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<Routes>
				<Route path='/' element={<Header />}>
					<Route path='login' element={<Login />} />
					<Route path='registration' element={<Registration />} />
					<Route path='courses' element={<Courses />} />
					<Route path='courses/add' element={<CreateCourse />} />
					<Route path='courses/:courseId' element={<CourseInfo />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
