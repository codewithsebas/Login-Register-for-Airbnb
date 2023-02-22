import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Layout from './Layout';
import Not404 from './pages/404';
import axios from 'axios';
import { UserContextProvider } from './UserContext';
import Account from './pages/account';

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

function App() {
	return (
		<UserContextProvider>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='/account/:subpage?' element={<Account />} />
					{/* <Route path='/account/bookings' element={<Account />} />
					<Route path='/account/places' element={<Account />} /> */}
					<Route path='*' element={<Not404 />} />
				</Route>
			</Routes>
		</UserContextProvider>
	);
}

export default App;
