import React from 'react';

import { Button } from 'common';

function Authors({ authors, onClick }) {
	return (
		<div className='flex flex-col justify-end space-y-4'>
			<h3 className='self-center font-semibold'>Authors</h3>

			{authors.map((author) => (
				<div className='flex flex-row' key={author.id}>
					<p className='basis-1/2'>{author.name}</p>
					<Button
						buttonText='Add author'
						className='btn-outline'
						onClick={() => onClick(author)}
					/>
				</div>
			))}
		</div>
	);
}

export default Authors;
