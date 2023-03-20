import React, { useState } from 'react';

import { Input, Button } from 'common';
import { CoursesList } from 'types';
import {
	SEARCH_BUTTON_TEXT,
	SEARCH_INPUT_PLACEHOLDER,
} from '../../../../constants';

interface Props {
	coursesList: CoursesList;
	setFilteredCourses: (value: CoursesList) => void;
}

const SearchBar: React.FC<Props> = ({ setFilteredCourses, coursesList }) => {
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (event) => {
		setInputValue(event.target.value);
	};

	const handleButtonClick = () => {
		const filteredCourses = coursesList.filter(
			(course) =>
				course.id.toLowerCase().includes(inputValue.toLowerCase()) ||
				course.title.toLowerCase().includes(inputValue.toLowerCase())
		);

		setFilteredCourses(filteredCourses);
	};

	return (
		<div className='flex space-x-3'>
			<Input
				placeholderText={SEARCH_INPUT_PLACEHOLDER}
				className='input-sm w-72'
				value={inputValue}
				onChange={handleInputChange}
			/>
			<Button buttonText={SEARCH_BUTTON_TEXT} onClick={handleButtonClick} />
		</div>
	);
};

export default SearchBar;
