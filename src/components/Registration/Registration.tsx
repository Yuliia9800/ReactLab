import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Button, Input } from 'common';
import { registrationAPI } from 'services';

function Registration() {
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const { email, name, password } = e.target.elements;

		const user = {
			email: email.value,
			name: name.value,
			password: password.value,
		};

		registrationAPI(user);
		navigate('/login');
	};

	return (
		<section className='max-w-8xl mx-auto px-4 py-24'>
			<div className='mx-auto w-full space-y-5 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12'>
				<h1 className='text-center text-4xl font-semibold text-gray-900'>
					Registration
				</h1>

				<form className='space-y-4' onSubmit={handleSubmit}>
					<Input
						id='name'
						type='text'
						labelText='Name'
						placeholderText='Enter name'
						required
					/>
					<Input
						id='email'
						type='email'
						labelText='Email'
						inputMode='email'
						placeholderText='Enter email'
						required
					/>
					<Input
						id='password'
						type='password'
						labelText='Password'
						placeholderText='Enter password'
						required
					/>
					<Button
						type='submit'
						className='btn-primary btn-md btn w-full py-3'
						buttonText='Registration'
					/>
				</form>

				<div className='my-2 text-center'>
					<p>
						If you have an account you can{' '}
						<Link to='/login' className='text-md link-primary text-blue-700'>
							Login
						</Link>
					</p>
				</div>
			</div>
		</section>
	);
}

export default Registration;
