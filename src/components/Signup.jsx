import Button from "./Button";
import { schema }  from '../../validation/SignupValidation'
import { yupResolver} from  "@hookform/resolvers/yup"
import { auth, googleProvider} from '../config/firebase'
import { createUserWithEmailAndPassword,signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import { useForm } from "react-hook-form";



const Signup = () => {
	// handle form
	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(schema),
	});

	const navigate = useNavigate();

	// Function to handle sign up with form
	const handleSignup = async (data) => {
		
	
		try {
			await createUserWithEmailAndPassword(auth,data.email, data.password);
		
			swal({
				title: 'Account created successfully',
				text: 'You have successfully logged in! Welcome back!',
				icon: 'success',
				button: 'OK',
			});
			navigate('/login');
		} catch (error) {
			swal({
				title: 'Oops account not created',
				text: 'We are sorry, but we could not log you in. Please ensure that you have filled out the form correctly and check your internet connection.',
				icon: 'error',
				button: 'OK',
			});
		}
	};
	//
	// Function to handle sign up with google
	const handleSignupWithGoogle = async (e) => {
		e.preventDefault();
		try {
			await signInWithPopup(auth, googleProvider);
			swal({
				title: 'Account created successfully',
				text: 'Go ahead and log in!',
				icon: 'success',
				button: 'OK',
			});
			navigate('/login');
		} catch (error) {
			swal({
				title: 'Oops account not created',
				text: 'We are sorry, but we could not log you in. Please ensure that you have filled out the form correctly or check your internet connection.',
				icon: 'error',
				button: 'OK',
			});
		}
	};



	return (
		<div className='grid grid-cols-1 md:grid-cols-2'>
			<div className='hidden lg:block'>
				<img src='/src/img/virtual-cover.jpg' alt='virtual care' className='h-screen' />
			</div>
			<div className='flex flex-col pt-10 lg:pt-4 px-4 lg:px-24 '>
				<form onSubmit={handleSubmit(handleSignup)}>
					<h2 className='accountCreation'>Create Your Account</h2>
					<div className='flex flex-col mb-3'>
						<label htmlFor='name' className='mb-2 font-bold label'>
							Enter your name
						</label>
						<input
							type='text'
							id='name'
							name='fullName'
							placeholder='jane doe'
							className='input'
							autoComplete='on'
							{...register('fullName')}
						/>
					</div>
					<p className='text-red-500'>{errors?.fullName?.message}</p>
					<div className='flex flex-col mb-2 font-bold'>
						<label htmlFor='email' className='mb-3  label'>
							Email
						</label>
						<input
							type='email'
							id='email'
							placeholder='jane@gmail.com'
							className='input'
							autoComplete='off'
							{...register('email')}
						/>
					</div>
					<p className='text-red-500'>{errors?.email?.message}</p>
					<div className='flex flex-col  font-bold mb-3'>
						<label htmlFor='password' className='mb-2  label'>
							Password
						</label>
						<input
							type='password'
							id='password'
							name='password'
							autoComplete='on'
							className='input'
							{...register('password')}
						/>
					</div>
					<p className='text-red-500'>{errors?.password?.message}</p>
					<div className='flex flex-col  font-bold mb-3'>
						<label htmlFor='confirm' className='mb-2 label'>
							Confirm Password
						</label>
						<input
							type='password'
							id='confirm'
							name='confirmPassword'
							autoComplete='on'
							className='input'
							{...register('confirmPassword')}
						/>
					</div>
					<p className='text-red-500'>{errors?.confirmPassword?.message}</p>
					<div className='flex justify-center flex-center mb-3'>
						<Button type='submit' value='Register Account' className='regBtn' />
					</div>

					<h2 className='hr-lines label'>Or continue with</h2>
					<div className='flex justify-center flex-center mb-4'>
						<Button
							type='button'
							onClick={handleSignupWithGoogle}
							className='bg-red-700 text-white label p-2 rounded-md lg:rounded-3xl btnSignup'
							value='Google Account'
						/>
					</div>

					<div className='flex label pt-5'>
						Already have an account?{' '}
						<a href='/login' className='text-blue-500 font-bold ml-1'>
							Login
						</a>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Signup
