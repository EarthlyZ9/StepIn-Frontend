'use client';

import ModalWrapper from '@components/layout/ModalWrapper';
import { useState } from 'react';
import LoginModal from '@components/auth/LoginModal';
import Portal from '@components/layout/Portal';
import { useSelector } from 'react-redux';

export default function StepContainer() {
	const user = useSelector((state) => state.user);
	const [isModalOpen, setIsModalOpen] = useState<Boolean>(true);
	const closeModalHandler = () => {
		setIsModalOpen(false);
	};

	console.log(user);
	return (
		<div className={'p-1'}>
			<p>This is Container</p>
			<div>{user?.id}</div>
			{!user ? (
				<Portal>
					<ModalWrapper
						Modal={LoginModal}
						isModal={isModalOpen}
						onCloseModal={closeModalHandler}
					/>
				</Portal>
			) : null}
		</div>
	);
}
