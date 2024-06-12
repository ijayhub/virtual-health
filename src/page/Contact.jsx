import Address from '../components/Address';
import Button from '../components/Button';
import Nav from '../components/Nav';

const Contact = () => {
	return (
		<>
			<Nav />
			<section className='grid md:grid-cols-2 items-center max-w-7xl mx-auto justify-between mt-12'>
				<div className='p-5'>
					<h3 className='lg:text-4xl text-blue-700 hover:text-red-700 font-bold mb-5 text-center text-2xl'>
						Get in touch
					</h3>
					<p className='text-justify leading-8'>
						Your mental health matters, and I am here to support you every step
						of the way. Whether you have questions about my services, need
						someone to talk to, or are ready to start your journey towards
						healing, dont hesitate to reach out. You can contact me via phone,
						email, or through the form. Your well-being is my priority, and I am
						committed to providing the personalized care and support you
						deserve.
					</p>
				</div>
				<form
					action='https://usebasin.com/f/c310cf65959d'
					method='POST'
					className='p-5'>
					<h3 className='text-red-700 hover:text-blue-600 font-bold text-center text-2xl lg:text-4xl'>
						Contact Form
					</h3>
					<div className='my-5'>
						<label htmlFor='name' className='label'>
							Name
						</label>
						<input
							type='text'
							name='name'
							id='name'
							className='w-full p-2 rounded-md bg-blue-100 border-none outline-none'
							placeholder='Andrew guy'
							required
						/>
					</div>
					<div className='mb-5'>
						<label htmlFor='email' className='label'>
							Email
						</label>
						<input
							type='email'
							name='email'
							id='email'
							className='w-full p-2 rounded-md bg-blue-100 border-none outline-none'
							placeholder='andrew@gmail.com'
							required
						/>
					</div>
					<div className='mb-5'>
						<label htmlFor='date' className='label'>
							Appointment Day
						</label>
						<input
							type='date'
							name='date'
							min={new Date().toISOString().split('T')[0]}
							id='date'
							className='w-full p-2 rounded-md bg-blue-100 border-none outline-none'
							placeholder='When???'
							required
						/>
					</div>
					<div className='mb-5'>
						<label htmlFor='time' className='label'>
							Time
						</label>
						<input
							type='time'
							name='time'
							id='time'
							className='w-full p-2 rounded-md bg-blue-100 border-none outline-none'
							placeholder='Pls what time?'
							required
						/>
					</div>
					<div className='mb-5'>
						<label htmlFor='message' className='label'>
							Reason for wanting to see an expert
						</label>
						<textarea
							name='message'
							id='message'
							cols='30'
							rows='10'
							className='w-full resize-none rounded-md bg-blue-100 p-2 border-none outline-none'
							placeholder='Your message...'
							required></textarea>
					</div>
					<div className='flex justify-end'>
						<Button
							value='Submit Form'
							className='font-bold bg-red-500 p-2 text-white hover:bg-blue-500 rounded-xl'
						/>
					</div>
				</form>
			</section>
			<Address />
		</>
	);
};

export default Contact;
