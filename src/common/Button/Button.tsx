import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	buttonText: string;
}

function Button({ className, onClick, buttonText, ...rest }: ButtonProps) {
	return (
		<button
			onClick={onClick}
			type='button'
			className={clsx('btn-sm btn px-5', className)}
			{...rest}
		>
			{buttonText}
		</button>
	);
}

export default Button;
