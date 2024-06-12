
import { Routes, Route } from 'react-router-dom';
import LoadingHome from './components/LoadingHome';
import Login from './components/Login';
import Signup from './components/Signup';
import Contact from './page/Contact';
import Home from './page/Home';

const App = () => {
	

	return (
		<div>
			<Routes>

				<Route path='/' element={<LoadingHome />} />
			
				<Route path='/signup' element={<Signup />} />
				<Route path='/login' element={<Login />} />
				<Route path='/home' element={<Home />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</div>
	);
};

export default App;
