import { Footer } from 'flowbite-react';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaStethoscope } from 'react-icons/fa';


function Footer1() {
	return (
		<footer>
			<div className='w-full bg-blue-500 '>
				<div className='grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 p-8'>
					<div>
						<div className='flex items-center'>
							<h1 className='headerNav'>X</h1>
							<FaStethoscope className='lg:text-2xl text-green-700 ' />
							<span className='headerCare'>traCare</span>
						</div>
					</div>
					<div className='grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 footerLinks'>
						<div>
							<Footer.Title title='Links' className='font-bold lg:text-2xl' />
							<Footer.LinkGroup col className='text-white'>
								<Footer.Link href='#about'>About</Footer.Link>
								<Footer.Link href='#services'>Service</Footer.Link>
								<Footer.Link href='/contact'>Contact</Footer.Link>
							</Footer.LinkGroup>
						</div>
						<div>
							<Footer.Title title='Follow us' className='font-bold lg:text-2xl' />
							<Footer.LinkGroup col className='text-white'>
								<Footer.Link href='#'>LinkedIn</Footer.Link>
								<Footer.Link href='#'>Twitter</Footer.Link>
								<Footer.Link href='#'>Facebook</Footer.Link>
							</Footer.LinkGroup>
						</div>
					
					</div>
				</div>
				<Footer.Divider />
				<div className='w-full sm:flex sm:items-center sm:justify-between max-w-6xl mx-auto text-white pl-2 '>
					<Footer.Copyright href='#' by='Xtracare™' />
					<div className='mt-4 flex space-x-6 sm:mt-0 sm:justify-center'>
						<Footer.Icon href='#' icon={BsFacebook} />
						<Footer.Icon href='#' icon={BsInstagram} />
						<Footer.Icon href='#' icon={BsTwitter} />
					</div>
				</div>
			</div>
		</footer>
	);
}
export default Footer1