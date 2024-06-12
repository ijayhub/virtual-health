import { auth} from '../config/firebase.js'
import {signOut} from 'firebase/auth';

const Logout = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth)
    } catch (err) {
      console.error(err); 
    }
    
  }
  return (
		<>
			<a href='/login'>
				<button onClick={handleLogout} className='bg-blue-700 text-white px-3 py-1 font-bold rounded-md active:bg-green-700'>
					Logout
				</button>
			</a>
		</>
	);
}

export default Logout
