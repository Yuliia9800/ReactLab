import React from 'react';
import clsx from 'clsx';

interface TextareaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	placeholderText: string;
	labelText: string;
	className?: string;
}

function Textarea({
	placeholderText,
	onChange,
	labelText,
	className = '',
}: TextareaProps) {
	return (
		<div className='form-control w-full'>
			<label className='label'>
				<span className='label-text'>{labelText}</span>
			</label>

			<textarea
				placeholder={placeholderText}
				className={clsx('textarea-primary textarea p-5', className)}
				onChange={onChange}
			></textarea>
		</div>
	);
}

export default Textarea;
