import React from 'react';

import { Button } from 'common';
import { ADD_AUTHOR_BUTTON_TEXT } from 'constant';
import { Author, AuthorsList } from 'types';

interface Props {
	authors: AuthorsList;
	onClick: (author: Author) => void;
}

const Authors: React.FC<Props> = ({ authors, onClick }) => {
	return (
		<div className='flex flex-col justify-end space-y-4'>
			<h3 className='self-center font-semibold'>Authors</h3>

			{authors.map((author) => (
				<div className='flex flex-row justify-evenly' key={author.id}>
					<p className='basis-1/2'>{author.name}</p>
					<Button
						buttonText={ADD_AUTHOR_BUTTON_TEXT}
						className='btn-outline'
						onClick={() => onClick(author)}
					/>
				</div>
			))}
		</div>
	);
};

export default Authors;
