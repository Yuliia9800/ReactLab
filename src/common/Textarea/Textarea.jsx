import React from 'react';
import clsx from 'clsx';

function Textarea({
	labelText = '',
	placeholderText,
	onChange,
	className = '',
}) {
	return (
		<div className='form-control w-full'>
			{labelText ? (
				<label className='label'>
					<span className='label-text'>{labelText}</span>
				</label>
			) : null}
			<textarea
				placeholder={placeholderText}
				className={clsx('textarea-primary textarea p-5', className)}
				onChange={onChange}
			></textarea>
		</div>
	);
}

export default Textarea;
