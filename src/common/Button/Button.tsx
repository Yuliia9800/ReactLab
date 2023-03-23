import React from 'react';
import clsx from 'clsx';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	buttonText: string;
}

const Button: React.FC<Props> = ({
	className,
	onClick,
	buttonText,
	...rest
}) => {
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
};

export default Button;
