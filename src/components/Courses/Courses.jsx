import React, { useState } from 'react';

import { Button } from 'common';
import { CourseCard, SearchBar } from './components';
import { ADD_NEW_COURSE_BUTTON_TEXT } from '../../constants';

function Courses({ coursesList, navigateToCreate }) {
	const [filteredCourses, setFilteredCourses] = useState([]);

	const courses = filteredCourses.length ? filteredCourses : coursesList;

	return (
		<div className='flex flex-col justify-between space-y-5 p-5'>
			<div className='flex justify-between'>
				<SearchBar
					coursesList={coursesList}
					setFilteredCourses={setFilteredCourses}
				/>
				<Button
					buttonText={ADD_NEW_COURSE_BUTTON_TEXT}
					className='btn-secondary'
					onClick={navigateToCreate}
				/>
			</div>

			{courses.map((courseData) => (
				<CourseCard key={courseData.id} {...courseData} />
			))}
		</div>
	);
}

export default Courses;
