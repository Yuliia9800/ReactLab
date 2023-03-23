import React from 'react';
import clsx from 'clsx';

function Button({ buttonText, onClick, className = '' }) {
	return (
		<button
			onClick={onClick}
			type='button'
			className={clsx('btn-sm btn px-5', className)}
		>
			{buttonText}
		</button>
	);
}

export default Button;
