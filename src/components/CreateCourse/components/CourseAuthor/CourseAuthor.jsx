import React from 'react';

import { Button } from 'common';
import { DELETE_AUTHOR_BUTTON_TEXT } from '../../../../constants';

function CourseAuthor({ authors, onClick }) {
	return (
		<div className='flex flex-col justify-end space-y-4'>
			<h3 className='self-center font-semibold'>Course authors</h3>

			{!authors.length ? (
				<p className='self-center text-sm font-light'>Author list is empty</p>
			) : (
				authors.map((author) => (
					<div className='flex flex-row' key={author.id}>
						<p className='basis-1/2'>{author.name}</p>
						<Button
							buttonText={DELETE_AUTHOR_BUTTON_TEXT}
							className='btn-outline btn-error'
							onClick={() => onClick(author)}
						/>
					</div>
				))
			)}
		</div>
	);
}

export default CourseAuthor;
