

const About = () => {
  return (
		<div
			className='mt-12 text-justify bg-blue-50 text-slate-900 p-4' id='about'>
			<div className='max-w-3xl lg:mx-auto  bg-green-100 my-6 p-5 rounded-2xl shadow-2xl '>
				<h2 className='text-3xl my-4 font-bold text-center '>About Us</h2>
				<p>
					At Xtra 🩺 Care Virtual Health, we believe in revolutionizing
					healthcare accessibility by harnessing the power of technology to
					provide comprehensive and personalized care to individuals in the
					comfort of their homes. Our platform is designed to bridge the gap
					between patients and healthcare providers, offering a seamless virtual
					healthcare experience tailored to meet the unique needs of each
					individual.
				</p>
			</div>
			<div className='lg:flex pt-8 max-w-4xl lg:mx-auto gap-5'>
				<div className='bg-white p-5 pb-6 lg:pb-0 rounded-2xl shadow-2xl'>
					<h3 className='text-3xl my-6 font-bold text-center'>Mission</h3>
					<p>
						To make high-quality healthcare accessible to everyone, regardless
						of their location or circumstances. Through our user-friendly
						platform, patients can connect with experienced healthcare
						professionals, schedule appointments, access medical records, and
						receive personalized treatment plans—all from the convenience of
						their computer or mobile device.
					</p>
				</div>
				<div className='bg-green-100 p-5 rounded-2xl shadow-2xl mt-6 lg:mt-0'>
					<h3 className='text-center text-3xl my-6 font-bold'>Vision</h3>
					<p>
						Our vision is to change how mental healthcare works using
						technology. We want to make it easier for everyone to get the
						support they need for their mental and emotional well-being. We see
						a future where mental health help is easy to find, free from
						judgment, and customized to fit each persons unique needs.
					</p>
					<p>
						At Xtra 🩺 Care Virtual Health, we prioritize patient safety and
						privacy above all else.
					</p>
				</div>
			</div>
		</div>
	);
}

export default About
