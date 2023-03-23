import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Button, Input } from 'common';
import {
	ADD_AUTHOR_BUTTON_TEXT,
	AUTHOR_NAME_INPUT_LABEL,
	AUTHOR_NAME_INPUT_PLACEHOLDER,
	mockedAuthorsList,
} from 'constant';

interface AddAuthorProps {
	createAuthor: (event: any) => void;
}

function AddAuthor({ createAuthor }: AddAuthorProps) {
	const [authorName, setAuthorName] = useState('');

	const handleCreateAuthor = () => {
		if (authorName.length < 2) {
			return alert('Author name length should be at least 2 characters');
		}

		const author = { id: uuidv4(), name: authorName };

		mockedAuthorsList.push(author);
		createAuthor((prev) => [...prev, author]);

		setAuthorName('');
	};

	return (
		<div className='flex flex-col space-y-4 '>
			<h3 className='self-center font-semibold'>Add author</h3>
			<Input
				labelText={AUTHOR_NAME_INPUT_LABEL}
				placeholderText={AUTHOR_NAME_INPUT_PLACEHOLDER}
				className='input-sm w-full'
				value={authorName}
				onChange={(e) => setAuthorName(e.target.value)}
			/>
			<Button
				className='btn-outline self-center'
				buttonText={ADD_AUTHOR_BUTTON_TEXT}
				onClick={handleCreateAuthor}
			/>
		</div>
	);
}

export default AddAuthor;
