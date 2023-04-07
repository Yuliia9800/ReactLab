import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from 'common';
import { ADD_NEW_COURSE_BUTTON_TEXT } from 'constant';
import { AppDispatch, RootState } from 'store';
import { getAuthors } from 'store/authors';
import { getCourses } from 'store/courses';
import { getUser } from 'store/user';
import { CourseCard, SearchBar } from './components';

function Courses() {
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();
	const coursesList = useSelector((state: RootState) => state.courses);
	const token = useSelector((state: RootState) => state.user.token);
	const role = useSelector((state: RootState) => state.user.role);
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

	useEffect(() => {
		dispatch(getCourses());
		dispatch(getAuthors());
	}, [dispatch]);

	useEffect(() => {
		if (token) {
			dispatch(getUser());
		}
	}, [dispatch, token]);

	return (
		<div className='flex flex-col justify-between space-y-5 p-5'>
			<div className='flex justify-between'>
				<SearchBar setSearch={setSearch} />
				{role === 'admin' ? (
					<Button
						className='btn-secondary'
						onClick={() => navigate('/courses/add')}
						buttonText={ADD_NEW_COURSE_BUTTON_TEXT}
					/>
				) : null}
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
