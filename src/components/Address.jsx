import { useState } from "react";
import { FaEnvelopeOpen, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const data = [
	{
		id: 1,
		title: 'Address',
		description: '25807 westhiemier pkwy , Katy, Texas  77494 suite 326',
		icon: <FaMapMarkerAlt className="text-red-600" />,
	},
	{
		id: 2,
		title: 'Phone',
		description: '3464812540',
		icon: <FaPhoneAlt />,
	},
	{
		id: 3,
		title: 'Email Address',
		description: 'NLUfondu@nlhealthcare.com',
		icon: <FaEnvelopeOpen />,
	},
];

const Address = () => {
  const [contacts]=useState(data)
  return (
		<section className="max-w-7xl mx-auto my-16">
			<div className='grid grid-cols-1 md:grid-cols-3 text-center gap-7 mt-4 mx-3 lg:mx-0'>
				{contacts.map((contact) => (
					<div key={contact.id}>
						<div className='justify-center items-center p-4 rounded-md shadow-xl border-4 border-t-blue-400'>
							{contact.icon}
							<h4 className='text-green-600 font-bold'>{contact.title}</h4>
							<p>{contact.description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Address
