import Button from "./Button";
import { auth, googleProvider } from '../config/firebase.js'
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import swal from "sweetalert"
import { useForm } from "react-hook-form";
import { schema } from "../../validation/LoginValidation.js";
import { yupResolver } from "@hookform/resolvers/yup";


const Login = () => {
	
	
	// handle form login
	const { register, handleSubmit, formState:{errors} } = useForm({
		resolver: yupResolver(schema),
	})
	
	const navigate = useNavigate();
	// Function to handle Login with form
	const handleLogin = async (data) => {
	
		try {
			await signInWithEmailAndPassword(auth, data.email, data.password);
			swal({
				title: '👏🏽',
				text: 'Welcome',
				icon: 'success',
				button: 'OK',
			});
			navigate('/home');
		} catch (error) {
			swal({
				title: 'Oops😞',
				text: 'Sorry',
				icon: 'error',
				button: 'OK',
			});
		}
	};
	
	
	// Function to handle Login with google
	const handleLoginWithGoogle = async (e) => {
		e.preventDefault();
		try {
			await signInWithPopup(auth, googleProvider);
			swal({
				title: '👏🏽',
				text: 'You have successfully logged in! Welcome to XtraCare',
				icon: 'success',
				button: 'OK',
			});
			navigate('/home');
		} catch (error) {
			swal({
				title: 'Oops😞',
				text: 'Sorry',
				icon: 'error',
				button: 'OK',
			});
		}
	};

	
	return (
		<section className='grid grid-cols-1 md:grid-cols-2'>
			<div className='flex flex-col pt-10 lg:pt-4 px-4 lg:px-24 '>
				<form onSubmit={handleSubmit(handleLogin)}>
					<h2 className='accountCreation'>Login to XtraCare</h2>
					<div className='flex flex-col mb-2 font-bold'>
						<label htmlFor='email' className='mb-3 label'>
							Email
						</label>
						<input
							type='email'
							id='email'
							name='email'
							placeholder='jane@gmail.com'
							autoComplete='on'
							className='input'
							{...register('email')}
						/>
					</div>
					<p className='text-red-500'>{errors?.email?.message}</p>
					<div className='flex flex-col font-bold mb-3'>
						<label htmlFor='password' className='mb-2 label'>
							Password
						</label>
						<input
							type='password'
							id='password'
							name='password'
							placeholder='Enter password...'
							autoComplete='on'
							className='input'
							{...register('password')}
						/>
					</div>
					<p className='text-red-500'>{errors?.password?.message}</p>
					<div className='flex justify-center flex-center mb-3 pt-4'>
						<Button
							type='submit'
							className='bg-blue-700 text-white label p-1 rounded-md lg:rounded-3xl btnSignup'
							value='Login Now'
						/>
					</div>

					<h2 className='hr-lines label'>Or Sign in with</h2>

					<div className='flex justify-center flex-center mb-3'>
						<Button
							type='button'
							onClick={handleLoginWithGoogle}
							className='bg-red-700 text-white label p-2 rounded-md lg:rounded-3xl btnSignup'
							value='	Google Account'
						/>
					</div>

					<div className='flex label justify-center items-center pt-3'>
						Dont have an account?{' '}
						<a href='/signup' className='text-blue-500 font-bold ml-1 label'>
							Sign Up
						</a>
					</div>
				</form>
			</div>
			<div className='hidden lg:block'>
				<img
					src='../src/assets/virtual-cover.jpg'
					alt='virtual care'
					className='h-screen'
				/>
			</div>
		</section>
	);
}

export default Login
