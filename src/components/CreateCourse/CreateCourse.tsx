import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';

import { Button, Input, Textarea } from 'common';
import { AddAuthor, Duration, Authors, CourseAuthor } from './components';
import {
	CREATE_COURSE_BUTTON_TEXT,
	DESCRIPTION_INPUT_LABEL,
	DESCRIPTION_INPUT_PLACEHOLDER,
	TITLE_INPUT_LABEL,
	TITLE_INPUT_PLACEHOLDER,
} from 'constant';
import { addCourse } from 'store/courses/coursesSlice';
import { Author } from 'types';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { addAuthor } from 'store/authors/authorsSlice';

function CreateCourse() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const authors = useSelector((state: RootState) => state.authors);
	const [courseAuthors, setCourseAuthors] = useState([]);
	const [titleValue, setTitleValue] = useState('');
	const [descriptionValue, setDescriptionValue] = useState('');
	const [durationValue, setDurationValue] = useState(0);

	const availableAuthors = useMemo(
		() => authors.filter((author) => !courseAuthors.includes(author)),
		[authors, courseAuthors]
	);

	const handleTitleChange = (event) => {
		setTitleValue(event.target.value);
	};

	const handleDescriptionChange = (event) => {
		setDescriptionValue(event.target.value);
	};

	const handleDurationChange = (event) => {
		setDurationValue(event.target.value);
	};

	const handleCreateAuthor = (author: Author) => {
		dispatch(addAuthor(author));
	};

	const handleAddAuthorToCourse = (author) => {
		setCourseAuthors((prev) => [...prev, author]);
	};

	const handleDeleteAuthorFromCourse = (author) => {
		setCourseAuthors((prev) => prev.filter((el) => el.id !== author.id));
	};

	const handleCreate = () => {
		if (durationValue <= 0) {
			alert('Duration should be more than 0 minute');
			return;
		}

		if (
			!titleValue ||
			!descriptionValue ||
			!courseAuthors.length ||
			!durationValue
		) {
			alert('Please, fill in all fields');
			return;
		}

		const newCourse = {
			id: uuidv4(),
			title: titleValue,
			description: descriptionValue,
			creationDate: new Date().toString(),
			duration: durationValue,
			authors: courseAuthors.map(({ id }) => id),
		};

		dispatch(addCourse(newCourse));
		navigate('/courses');
	};

	return (
		<>
			<div className='m-5 flex flex-col justify-between space-y-5 p-5 shadow-xl'>
				<div className='flex justify-between'>
					<Input
						labelText={TITLE_INPUT_LABEL}
						placeholderText={TITLE_INPUT_PLACEHOLDER}
						className='input-sm max-w-sm'
						value={titleValue}
						onChange={handleTitleChange}
					/>
					<Button
						buttonText={CREATE_COURSE_BUTTON_TEXT}
						className='btn-secondary self-end'
						onClick={handleCreate}
					/>
				</div>

				<Textarea
					labelText={DESCRIPTION_INPUT_LABEL}
					onChange={handleDescriptionChange}
					placeholderText={DESCRIPTION_INPUT_PLACEHOLDER}
				/>

				<div className='flex gap-16 p-5 '>
					<div className='flex-1 space-y-8 '>
						<AddAuthor createAuthor={handleCreateAuthor} />
						<Duration
							durationValue={durationValue}
							handleDurationChange={handleDurationChange}
						/>
					</div>

					<div className='flex-1 space-y-8'>
						<Authors
							authors={availableAuthors}
							onClick={handleAddAuthorToCourse}
						/>
						<CourseAuthor
							authors={courseAuthors}
							onClick={handleDeleteAuthorFromCourse}
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default CreateCourse;
