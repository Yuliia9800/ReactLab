import React, { useState } from 'react';

import { Courses, Header, CreateCourse } from 'components';
import { mockedCoursesList } from 'constants/mockedData';

function App() {
	const [coursesList, setCoursesList] = useState(mockedCoursesList);
	const [isCreatePage, setIsCreatePage] = useState(false);

	const handleAddCourse = (course) => {
		setCoursesList((prev) => [...prev, course]);
		setIsCreatePage(false);
	};

	const navigateToCreate = () => {
		setIsCreatePage(true);
	};

	return (
		<>
			<Header />
			{isCreatePage ? (
				<CreateCourse handleAddCourse={handleAddCourse} />
			) : (
				<Courses
					navigateToCreate={navigateToCreate}
					coursesList={coursesList}
				/>
			)}
		</>
	);
}

export default App;
