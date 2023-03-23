import React from 'react';

import { Button } from 'common';
import { LOGOUT_BUTTON_TEXT } from 'constants/constants';
import Logo from './components/Logo/Logo';

function Header() {
	return (
		<div className='primary-content navbar px-5'>
			<div className='flex-1'>
				<Logo />
			</div>
			<div className='flex-none gap-6'>
				<p className='font-bold'>Yuliia</p>
				<Button
					buttonText={LOGOUT_BUTTON_TEXT}
					className='btn-ghost'
					onClick={() => console.log('HeaderButtonClick')}
				/>
			</div>
		</div>
	);
}

export default Header;
