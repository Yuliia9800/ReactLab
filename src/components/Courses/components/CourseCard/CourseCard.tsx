import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from 'common';
import { pipeDuration, dateGenerator, getAuthorsNames } from 'helpers';
import { Course } from 'types';
import { SHOW_COURSE_BUTTON_TEXT } from '../../../../constants';

interface Props {
	data: Course;
}

const CourseCard: React.FC<Props> = ({ data }) => {
	const navigate = useNavigate();
	const { id, title, description, authors, duration, creationDate } = data;

	const handleButtonClick = () => {
		navigate(`/courses/${id}`);
	};

	return (
		<div className='card flex min-h-[200px] flex-row justify-between gap-10 bg-base-200 p-5 shadow-xl'>
			<div className='w-4/6 space-y-2 '>
				<h1 className='text-2xl font-bold'>{title}</h1>
				<p className='text-sm'>{description}</p>
			</div>

			<div className='flex w-2/6 flex-col justify-between space-y-2'>
				<div className=' space-y-2'>
					<p className='truncate text-sm'>
						<b>Author: </b>
						{getAuthorsNames(authors).join(', ')}
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
				<Button
					buttonText={SHOW_COURSE_BUTTON_TEXT}
					onClick={handleButtonClick}
					className='btn-default btn-block self-center'
				/>
			</div>
		</div>
	);
};

export default CourseCard;
