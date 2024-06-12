import { useState, useEffect } from 'react';
import { DNA } from 'react-loader-spinner';
import Signup from './Signup';

const LoadingHome = () => {
	const [loader, setLoader] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoader(false);
		}, 2000); 

		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			<main className='bg-blue-100'>
				{loader && (
					<div className='flex flex-col pt-54 justify-center items-center h-screen '>
						<DNA
							visible={true}
							height='130'
							width='130'
							ariaLabel='dna-loading'
							wrapperStyle={{}}
							wrapperClass='dna-wrapper'
						/>
						<div>
							<p className='text-3xl font-bold'>Loading...</p>
						</div>
					</div>
				)}
			</main>
			<div>{!loader && <Signup />}</div>
		</>
	);
};

export default LoadingHome;
