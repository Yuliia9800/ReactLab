import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { Button } from 'common';
import { LOGOUT_BUTTON_TEXT } from 'constant';
import Logo from './components/Logo/Logo';

function Header() {
	const navigate = useNavigate();
	const location = useLocation();
	const [token, setToken] = useState(null);

	useEffect(() => {
		const token = localStorage.getItem('token');

		setToken(token);
	}, [location]);

	const handleButtonClick = () => {
		localStorage.removeItem('token');
		navigate('/login');
	};

	return (
		<>
			<div className='primary-content navbar px-5'>
				<div className='flex-1'>
					<Logo />
				</div>
				<div className='flex-none gap-6'>
					{token ? (
						<>
							<p className='font-bold'>Yuliia</p>
							<Button
								buttonText={LOGOUT_BUTTON_TEXT}
								className='btn-ghost'
								onClick={handleButtonClick}
							/>
						</>
					) : null}
				</div>
			</div>
			<Outlet />
		</>
	);
}

export default Header;
