import { Link } from "react-router-dom";
import About from "../components/About";
import Book from "../components/Book";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Nav from "../components/Nav"
import Services from "../components/Services";
import { BsFillArrowUpSquareFill } from 'react-icons/bs';


const Home = () => {
  return (
		<>
			<Nav />
			<main className='hero '>
				<div className='max-w-5xl mx-auto text-center px-2 lg:px-0'>
					<h2 className='text-2xl lg:text-6xl font-bold mb-6 text-blue-700'>
						Empower Yourself with the Best Health Service Available
					</h2>
					<p className='text-black font-bold mb-6 lg:text-2xl'>
						Take control of your health and enjoy top-notch healthcare services
						tailored <br /> just for you.
					</p>
					<Link to='/contact'>
						<Button value='Book' className=' homeBtn' />
					</Link>
				</div>
			</main>
			<About />
			<Services/>
			<Book/>
			<a href='#'>
				<div className='flex justify-end items-end sticky p-4 lg:p-8'>
					<BsFillArrowUpSquareFill className='text-blue-900 text-2xl lg:text-3xl' />
				</div>
			</a>
			<Footer />
		</>
	);
}

export default Home
