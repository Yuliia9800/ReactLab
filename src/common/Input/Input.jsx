import React from 'react';
import clsx from 'clsx';

function Input({
	value,
	onChange,
	labelText = '',
	placeholderText,
	className = '',
	type = 'text',
	...rest
}) {
	return (
		<div className='form-control w-full'>
			{labelText ? (
				<label className='label'>
					<span className='label-text'>{labelText}</span>
				</label>
			) : null}
			<input
				type={type}
				value={value}
				placeholder={placeholderText}
				className={clsx('input-primary input input-sm', className)}
				onChange={onChange}
				{...rest}
			/>
		</div>
	);
}

export default Input;
