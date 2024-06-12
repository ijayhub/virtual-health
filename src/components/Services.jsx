import { useState } from 'react';
import { FaBook, FaCalendarAlt, FaNotesMedical, FaExclamationTriangle, FaHeart, FaUsers } from 'react-icons/fa';

const data = [
	{
		id: 1,
		icon: <FaNotesMedical className='text-red-600' />,
		title: 'Assessment and Evaluation',
		description:
			'Conducting thorough assessments to understand clients mental health concerns, including evaluating symptoms, mental health history, and current stressors.',
	},
	{
		id: 2,
		icon: <FaCalendarAlt className='text-blue-500 mr-2' />,
		title: 'Treatment Planning',
		description:
			'Developing personalized treatment plans tailored to each clients unique needs, which may include therapy techniques, coping strategies, and medication management.',
	},
	{
		id: 3,
		icon: <FaHeart className='text-red-500 ' />,
		title: 'Therapeutic Support',
		description:
			'Providing one-on-one counseling and psychoeducation to clients, offering emotional support, guidance, and teaching coping skills to manage mental health symptoms.',
	},
	{
		id: 4,
		icon: <FaExclamationTriangle className='text-purple-500' />,
		title: 'Crisis Intervention',
		description:
			'Assisting clients during mental health crises, offering immediate support and intervention strategies to promote safety and stabilization',
	},
	{
		id: 5,
		icon: <FaBook className='text-orange-500 ' />,
		title: 'Education and Advocacy',
		description:
			'Educating clients and their families about mental health conditions, treatment options, and available resources.',
	},
	{
		id: 6,
		icon: <FaUsers className='text-blue-500 ' />,
		title: 'Collaboration and Referral:',
		description:
			'Collaborating with other healthcare professionals, such as psychiatrists, psychologists, and social workers, to ensure comprehensive care.',
	},
];

const Services = () => {
	const [services] = useState(data);

	return (
		<section id='services' className='my-12 max-w-7xl mx-auto'>
			<div className='text-center'>
				<h3 className='text-red-700 font-bold text-4xl'>Services</h3>
				<p className='text-blue-700 text-xl font-bold'>
					Provide Mental Health Services
				</p>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-3 text-center gap-7 mt-4 mx-3 lg:mx-0'>
				{services.map((service) => (
					<div key={service.id}>
						<div className='justify-center items-center p-4 rounded-md shadow-xl border-4 border-t-yellow-400'>
							{service.icon}
							<h4 className='text-green-600 font-bold'>{service.title}</h4>
							<p>{service.description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Services;
