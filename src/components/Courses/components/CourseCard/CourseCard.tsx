import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BsTrash, BsPencil } from 'react-icons/bs';

import { Button } from 'common';
import { pipeDuration, dateGenerator } from 'helpers';
import { Course } from 'types';
import { SHOW_COURSE_BUTTON_TEXT } from 'constant';
import { deleteCourse } from 'store/courses';
import { AppDispatch, RootState } from 'store';

interface CourseCardProps extends Course {}

function CourseCard({
	id,
	title,
	description,
	authors,
	duration,
	creationDate,
}: CourseCardProps) {
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();
	const authorsList = useSelector((state: RootState) => state.authors);
	const role = useSelector((state: RootState) => state.user.role);

	const handleShowCourse = () => {
		navigate(`/courses/${id}`);
	};

	const courseAuthors = authors.map(
		(authorId) => authorsList?.find(({ id }) => id === authorId)?.name
	);

	const handleEdit = () => {
		navigate(`/courses/update/${id}`);
	};

	const handleDelete = () => {
		dispatch(deleteCourse(id));
	};

	return (
		<div className='card flex min-h-[200px] flex-row justify-between gap-10 bg-base-200 p-5 shadow-xl'>
			<div className='w-4/6 space-y-2'>
				<h1 className='text-2xl font-bold'>{title}</h1>
				<p className='text-sm'>{description}</p>
			</div>

			<div className='flex w-2/6 min-w-[300px] flex-col justify-between space-y-2'>
				<div className='space-y-2'>
					<p className='truncate text-sm'>
						<b>Author: </b>
						{courseAuthors.join(', ')}
					</p>
					<p className='text-sm'>
						<b>Duration: </b>
						{pipeDuration(duration)} hours
					</p>
					<p className='text-sm'>
						<b>Created: </b>
						{dateGenerator(creationDate)}
					</p>
				</div>
				<div className='flex flex-wrap justify-between '>
					<Button
						buttonText={SHOW_COURSE_BUTTON_TEXT}
						onClick={handleShowCourse}
						className=''
					/>

					{role === 'admin' ? (
						<div className='space-x-2'>
							<Button
								buttonText={<BsPencil />}
								onClick={handleEdit}
								className='text-xl'
							/>
							<Button
								buttonText={<BsTrash />}
								onClick={handleDelete}
								className='text-xl '
							/>
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
}

export default CourseCard;
