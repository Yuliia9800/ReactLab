import React from 'react';

import { Button } from 'common';
import { AuthorsList, Course } from 'types';
import { SHOW_COURSE_BUTTON_TEXT } from '../../../../constants';

import { pipeDuration, dateGenerator } from 'helpers';

interface Props {
	data: Course;
	authorsList: AuthorsList;
}

const CourseCard: React.FC<Props> = ({ data, authorsList }) => {
	const { title, description, authors, duration, creationDate } = data;

	const getAuthorName = (authorId) =>
		authorsList.find(({ id }) => id === authorId)?.name;

	const authorsNames = authors.map((author) => getAuthorName(author));

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
						{authorsNames.join(', ')}
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
					onClick={() => console.log(SHOW_COURSE_BUTTON_TEXT)}
					className='btn-default btn-block self-center'
				/>
			</div>
		</div>
	);
};

export default CourseCard;
