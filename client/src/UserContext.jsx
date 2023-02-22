import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext({});

// eslint-disable-next-line react/prop-types
export function UserContextProvider({ children }) {
	const [user, setUser] = useState(null);
	const [ready, setReady] = useState(false);

	useEffect(() => {
		if (!user) {
			const { data } = axios.get('/profile').then(({ data }) => {
				setUser(data);
				setReady(true);
			});
			setUser(data);
		}
	}, []);

	return (
		<UserContext.Provider value={{ user, setUser, ready }}>
			{children}
		</UserContext.Provider>
	);
}
