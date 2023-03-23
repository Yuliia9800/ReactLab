import React from 'react';
import clsx from 'clsx';

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	placeholderText: string;
	labelText: string;
	className?: string;
}

const Textarea: React.FC<Props> = ({
	placeholderText,
	onChange,
	labelText,
	className = '',
}) => {
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
};

export default Textarea;
