'use client';

import { useState } from 'react';
import Portal from '@components/layout/Portal';
import ModalWrapper from '@components/layout/ModalWrapper';
import ProfileModal from '@components/profile/ProfileModal';
import { useSelector } from 'react-redux';
export default function Navbar() {
	const currentProject = useSelector((state) => state.project.value);
	const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);

	const openProfileHandler = () => {
		setIsProfileOpen(true);
	};

	const closeProfileHandler = () => {
		setIsProfileOpen(false);
	};

	console.log(currentProject);
	return (
		<nav className={'w-full h-15 border-b-2 border-gray-6 p-1'}>
			<button type={'button'} onClick={openProfileHandler}>
				프로필
			</button>
			{isProfileOpen && (
				<Portal>
					<ModalWrapper
						Modal={ProfileModal}
						isModal={isProfileOpen}
						onCloseModal={closeProfileHandler}
					/>
				</Portal>
			)}
		</nav>
	);
}
