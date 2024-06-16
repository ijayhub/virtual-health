import { Link } from 'react-router-dom';
import image1 from '../img/image1.jpeg'
import Button from './Button';

const Book = () => {
  return (
		<section className='flex items-center max-w-5xl mx-auto my-32   '>
			<div className='w-4/6 hidden lg:block '>
				<img
					src={image1}
					alt='A professional MH nurse'
					className='rounded-2xl shadow-2xl hidden lg:block'
				/>
				<div className='flex items-center justify-center mt-1'>
					<small className=' text-blue-600 font-bold hover:text-green-500'>
						DNP, PMHNP~BC, FNP-C
					</small>
				</div>
			</div>
			<div className='lg:ml-10 p-5 leading-9 '>
				<p className='text-red-500 bg-blue-200 text-center rounded-lg font-bold mb-3'>
					Book Appointment
				</p>
				<h3 className='lg:text-4xl text-blue-800 font-bold mb-3'>
					Schedule an Appointment With a <br /> Skilled Mental Health Nurse.
				</h3>
				<p className='text-justify mb-3 '>
					Feeling overwhelmed? Dr. Nkechi Ufondu, DNP, can help. Get
					personalized mental health support online, from the comfort of your
					own home. Virtual consultations make it easy to take the first step
					towards a happier, healthier you.
				</p>
				<Link to='/contact'>
					<div className='btnBook'>
						<Button className='bookBtn' value='Book Appointment' />
					</div>
				</Link>
			</div>
		</section>
	);
}

export default Book
