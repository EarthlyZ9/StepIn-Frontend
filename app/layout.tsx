'use client';
import '../styles/globals.css';
import { Provider } from 'react-redux';
import store from './../globalState/store';
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
