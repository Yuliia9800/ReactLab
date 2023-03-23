import React from 'react';
import clsx from 'clsx';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	placeholderText: string;
	labelText?: string;
	className?: string;
}

function Input({
	value,
	onChange,
	placeholderText,
	className,
	labelText = '',
	type = 'text',
	...rest
}: InputProps) {
	return (
		<div className='form-control w-full'>
			{labelText ? (
				<label className='label text-xs font-medium text-gray-700'>
					<span className='label-text'>{labelText}</span>
				</label>
			) : null}

			<input
				type={type}
				value={value}
				placeholder={placeholderText}
				className={clsx('input-primary input input-md', className)}
				onChange={onChange}
				{...rest}
			/>
		</div>
	);
}

export default Input;
