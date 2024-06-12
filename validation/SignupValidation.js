import * as yup from 'yup';

export const schema = yup.object().shape({
	fullName: yup.string().required('Name is required'),
	email: yup
		.string()
		.required('Email is required')
		.email('Invalid email format'),
	password: yup
		.string()
		.min(4, 'Password must be at least 4 characters')
		.max(18, 'Password must be at most 18 characters')
		.required('Password is required'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Passwords does not match')
		.required('Please confirm your password'),
});
