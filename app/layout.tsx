'use client';
import '../styles/globals.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { getToken } from '@utils/token';
import authApi from '@apis/auth/authApi';

function reducer(currentState, action) {
	if (currentState === undefined) {
		if (getToken()) {
			console.log('token');
			let currentUser;
			authApi.getUser().then((r) => {
				currentUser = r;
			});
			return {
				user: currentUser,
			};
		} else if (!getToken()) {
			return { user: null };
		}
	}
	const newState = { ...currentState };
	if (action.type === 'patchUser') {
		newState.user = action.payload;
	}
	return newState;
}

const store = createStore(reducer);

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Provider store={store}>
			<html lang="en" className={'h-full w-full'}>
				<body
					className={
						'font-Elice font-medium h-full w-full bg-primary-navy-3'
					}
				>
					<div id={'portal'}></div>
					{children}
				</body>
			</html>
		</Provider>
	);
}
