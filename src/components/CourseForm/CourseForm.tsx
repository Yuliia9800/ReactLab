import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { Button, Input, Textarea } from 'common';
import {
	CREATE_COURSE_BUTTON_TEXT,
	DESCRIPTION_INPUT_LABEL,
	DESCRIPTION_INPUT_PLACEHOLDER,
	TITLE_INPUT_LABEL,
	TITLE_INPUT_PLACEHOLDER,
	UPDATE_COURSE_BUTTON_TEXT,
} from 'constant';
import { addCourse, updateCourse } from 'store/courses';
import { Author } from 'types';
import { AppDispatch, RootState } from 'store';
import { addAuthor } from 'store/authors';
import { AddAuthor, Duration, Authors, CourseAuthor } from './components';

function CourseForm() {
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();
	const { courseId } = useParams();

	const courses = useSelector((state: RootState) => state.courses);
	const courseInfo = courses.find((course) => course.id === courseId);
	const authors = useSelector((state: RootState) => state.authors);

	const [courseAuthorIds, setCourseAuthorIds] = useState([]);
	const [titleValue, setTitleValue] = useState('');
	const [descriptionValue, setDescriptionValue] = useState('');
	const [durationValue, setDurationValue] = useState(0);
	const availableAuthors = useMemo(
		() => authors.filter((author) => !courseAuthorIds.includes(author.id)),
		[authors, courseAuthorIds]
	);

	const courseAuthors = useMemo(
		() => authors.filter((author) => courseAuthorIds.includes(author.id)),
		[authors, courseAuthorIds]
	);

	useEffect(() => {
		if (courseId && courseInfo) {
			setTitleValue(courseInfo.title);
			setCourseAuthorIds(courseInfo.authors);
			setDescriptionValue(courseInfo.description);
			setDurationValue(courseInfo.duration);
		}
	}, [courseId, courseInfo, authors]);

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
		setCourseAuthorIds((prev) => [...prev, author.id]);
	};

	const handleDeleteAuthorFromCourse = (author) => {
		setCourseAuthorIds((prev) => prev.filter((id) => id !== author.id));
	};

	const handleCreate = () => {
		if (durationValue <= 0) {
			alert('Duration should be more than 0 minute');
			return;
		}

		if (
			!titleValue ||
			!descriptionValue ||
			!setCourseAuthorIds.length ||
			!durationValue
		) {
			alert('Please, fill in all fields');
			return;
		}

		const newCourse = {
			id: courseInfo?.id || uuidv4(),
			title: titleValue,
			description: descriptionValue,
			creationDate: new Date().toString(),
			duration: Number(durationValue),
			authors: courseAuthorIds,
		};

		courseId
			? dispatch(updateCourse(newCourse))
			: dispatch(addCourse(newCourse));
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
						buttonText={
							courseId ? UPDATE_COURSE_BUTTON_TEXT : CREATE_COURSE_BUTTON_TEXT
						}
						className='btn-secondary self-end'
						onClick={handleCreate}
					/>
				</div>

				<Textarea
					value={descriptionValue}
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

export default CourseForm;
