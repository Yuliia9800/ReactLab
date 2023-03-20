import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header, CourseInfo, Courses, CreateCourse, Root } from 'components';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Root />} />
				<Route path='/courseInfo' element={<CourseInfo />} />
				<Route path='/courses' element={<Courses />} />
				<Route path='/courses/add' element={<CreateCourse />} />
			</Routes>
		</>
	);
}

export default App;
