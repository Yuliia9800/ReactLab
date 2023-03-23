import React from 'react';
import { Link } from 'react-router-dom';

import logo from 'assets/logo.webp';

function Logo() {
	return (
		<Link to='/courses'>
			<img src={logo} alt='logo' className='w-40' />
		</Link>
	);
}

export default Logo;
