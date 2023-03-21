import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Button, Input } from 'common';
import { api } from 'helpers';

function Login() {
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		const { email, password } = e.target.elements;

		const user = {
			email: email.value,
			password: password.value,
		};

		api
			.post('login', user)
			.then((response) => {
				console.log(response);

				localStorage.setItem('token', JSON.stringify(response.data.result));
				navigate('/courses');
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		<section className='max-w-8xl mx-auto px-4 py-24'>
			<div className='mx-auto w-full space-y-5 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12'>
				<h1 className='text-center text-4xl font-semibold text-gray-900'>
					Login
				</h1>

				<form className='space-y-4' onSubmit={handleSubmit}>
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
						buttonText='Login'
					/>
				</form>

				<div className='my-2 text-center'>
					<p>
						If you not have an account you can{' '}
						<Link
							to='/registration'
							className='text-md link-primary text-blue-700'
						>
							Registration
						</Link>
					</p>
				</div>
			</div>
		</section>
	);
}

export default Login;
