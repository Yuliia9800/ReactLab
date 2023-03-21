import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from 'common';
import { CourseCard, SearchBar } from './components';
import { ADD_NEW_COURSE_BUTTON_TEXT, mockedCoursesList } from '../../constants';
import { CoursesList } from 'types';

const Courses: React.FC = () => {
	const [coursesList] = useState<CoursesList>(mockedCoursesList);
	const [filteredCourses, setFilteredCourses] = useState<CoursesList>([]);
	const navigate = useNavigate();

	const courses = filteredCourses.length ? filteredCourses : coursesList;

	return (
		<div className='flex flex-col justify-between space-y-5 p-5'>
			<div className='flex justify-between'>
				<SearchBar
					coursesList={coursesList}
					setFilteredCourses={setFilteredCourses}
				/>
				<Button
					className='btn-secondary'
					onClick={() => navigate('/courses/add')}
					buttonText={ADD_NEW_COURSE_BUTTON_TEXT}
				/>
			</div>

			{courses.map((courseData) => (
				<CourseCard key={courseData.id} data={courseData} />
			))}
		</div>
	);
};

export default Courses;
