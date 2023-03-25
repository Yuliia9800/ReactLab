import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { Button } from 'common';
import { LOGOUT_BUTTON_TEXT } from 'constant';
import Logo from './components/Logo/Logo';
import { logout } from 'store/user/userSlice';
import { RootState } from 'store';

function Header() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const [token, setToken] = useState(null);
	const name = useSelector((state: RootState) => state.user.name);

	useEffect(() => {
		const token = localStorage.getItem('token');

		setToken(token);
	}, [location]);

	const handleButtonClick = () => {
		dispatch(logout());
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
							<p className='font-bold'>{name}</p>
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
