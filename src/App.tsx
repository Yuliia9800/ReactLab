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
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { getCourses } from 'store/courses/coursesSlice';
import { getAuthors } from 'store/authors/authorsSlice';
import { getAllAuthors, getAllCourses } from 'services';

function App() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const token = useSelector((state: RootState) => state.user.token);

	useEffect(() => {
		getAllCourses().then((response) => {
			console.log(response);

			dispatch(getCourses(response.data.result));
		});

		getAllAuthors().then((response) => {
			console.log(response);

			dispatch(getAuthors(response.data.result));
		});
	}, [dispatch]);

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
						<Route path='/courses/add' element={<CreateCourse />} />
						<Route path='/courses/:courseId' element={<CourseInfo />} />
					</Route>
				</Route>
			</Routes>
		</>
	);
}

export default App;
