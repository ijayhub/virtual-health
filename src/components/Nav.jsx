import { useState } from 'react';
import { FaStethoscope } from 'react-icons/fa';
import { data } from '../../data';
import { GrClose } from 'react-icons/gr';
import { FaBars } from 'react-icons/fa';
import Logout from './Logout';

const Nav = () => {
	const [navs] = useState(data);
	const [isOpen, setIsOpen] = useState(false);

	function handleMenu() {
		setIsOpen(!isOpen);
	}

	return (
		<div className='shadow-2xl p-4'>
			<nav className={`navbar ${isOpen && 'open'}`}>
				<button
					onClick={handleMenu}
					className='fixed z-50 top-7 left-5 text-2xl lg:hidden'>
					{isOpen ? <GrClose /> : <FaBars />}
				</button>
				<div className='flex items-center'>
					<h1 className='headerNav'>X</h1>
					<FaStethoscope className='lg:text-2xl text-green-700 ' />
					<span className='headerCare'>traCare</span>
				</div>
				<div>
					<ul className='list-none flex flex-col lg:flex-row items-center justify-center gap-8'>
						{navs.map((nav, index) => (
							<li key={index}>
								<a href={nav.link} className='navLink'>
									{nav.title}
								</a>
							</li>
						))}
					</ul>
				</div>
				<Logout/>
			</nav>
		</div>
	);
};

export default Nav;
