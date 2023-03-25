import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Button } from 'common';
import { ADD_NEW_COURSE_BUTTON_TEXT } from 'constant';
import { CourseCard, SearchBar } from './components';
import { RootState } from 'store';

function Courses() {
	const navigate = useNavigate();
	const coursesList = useSelector((state: RootState) => state.courses);
	const [search, setSearch] = useState('');

	const courses = useMemo(
		() =>
			coursesList.filter(
				(course) =>
					course.id.toLowerCase().includes(search.toLowerCase()) ||
					course.title.toLowerCase().includes(search.toLowerCase())
			),
		[coursesList, search]
	);

	return (
		<div className='flex flex-col justify-between space-y-5 p-5'>
			<div className='flex justify-between'>
				<SearchBar setSearch={setSearch} />
				<Button
					className='btn-secondary'
					onClick={() => navigate('/courses/add')}
					buttonText={ADD_NEW_COURSE_BUTTON_TEXT}
				/>
			</div>

			{courses.map(
				({ id, title, description, creationDate, duration, authors }) => (
					<CourseCard
						key={id}
						id={id}
						title={title}
						description={description}
						creationDate={creationDate}
						authors={authors}
						duration={duration}
					/>
				)
			)}
		</div>
	);
}

export default Courses;
