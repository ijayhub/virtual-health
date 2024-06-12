import * as yup from 'yup';

export const schema = yup.object().shape({
	
	email: yup
		.string()
		.required('Email required does not match'),
		password: yup
		.string()
		.required('Password required does not match'),
	
});
