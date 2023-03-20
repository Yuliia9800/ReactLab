import React from 'react';

import { Input } from 'common';
import { pipeDuration } from 'helpers';
import {
	DURATION_INPUT_LABEL,
	DURATION_INPUT_PLACEHOLDER,
} from '../../../../constants';

interface Props {
	durationValue: number;
	handleDurationChange: (event: any) => void;
}

const Duration: React.FC<Props> = ({ durationValue, handleDurationChange }) => {
	return (
		<div className='flex flex-col space-y-2'>
			<h3 className='self-center font-semibold'>Duration</h3>
			<Input
				labelText={DURATION_INPUT_LABEL}
				placeholderText={DURATION_INPUT_PLACEHOLDER}
				className='input-sm w-full'
				value={durationValue}
				onChange={handleDurationChange}
				type='number'
				min={0}
			/>

			<h4 className='text-lg font-light'>
				Duration:
				<b className='text-xl font-bold'> {pipeDuration(durationValue)} </b>
				hours
			</h4>
		</div>
	);
};

export default Duration;
