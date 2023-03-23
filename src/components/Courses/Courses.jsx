import React, { useState } from 'react';

import { Button } from 'common';
import { CourseCard, SearchBar } from './components';
import { ADD_NEW_COURSE_BUTTON_TEXT } from 'constants/constants';

function Courses({ coursesList, navigateToCreate }) {
	const [search, setSearch] = useState('');

	const courses = coursesList.filter(
		(course) =>
			course.id.toLowerCase().includes(search.toLowerCase()) ||
			course.title.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<div className='flex flex-col justify-between space-y-5 p-5'>
			<div className='flex justify-between'>
				<SearchBar setSearch={setSearch} />
				<Button
					buttonText={ADD_NEW_COURSE_BUTTON_TEXT}
					className='btn-secondary'
					onClick={navigateToCreate}
				/>
			</div>

			{courses.map((courseData) => (
				<CourseCard
					key={courseData.id}
					title={courseData.title}
					description={courseData.description}
					creationDate={courseData.creationDate}
					authors={courseData.authors}
					duration={courseData.duration}
				/>
			))}
		</div>
	);
}

export default Courses;
