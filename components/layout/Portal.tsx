'use client';

import ReactDOM from 'react-dom';
import { Fragment } from 'react';
import { useEffect, useState } from 'react';

const Backdrop = () => {
	return (
		<div
			className={
				'fixed top-0 left-0 w-screen h-screen z-20 opacity-60 bg-gray-7'
			}
		></div>
	);
};

const ModalOverlay = ({ children }) => {
	return (
		<div
			className={
				'w-screen h-screen flex flex-col items-center fixed z-30 justify-items-center'
			}
		>
			<div className={'z-40 bg-white rounded-md m-auto'}>{children}</div>
		</div>
	);
};

export default function Portal({ children }) {
	const [portalEl, setPortalEl] = useState<HTMLElement | null>(null);
	useEffect(() => {
		typeof window !== 'undefined' &&
			setPortalEl(document.getElementById('portal'));
	}, []);
	return portalEl && children ? (
		<Fragment>
			{ReactDOM.createPortal(<Backdrop />, portalEl)}
			{ReactDOM.createPortal(
				<ModalOverlay>{children}</ModalOverlay>,
				portalEl,
			)}
		</Fragment>
	) : null;
}
