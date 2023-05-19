'use client';

import ModalWrapper from '@components/layout/ModalWrapper';
import { useState } from 'react';
import LoginModal from '@components/auth/LoginModal';
import Portal from '@components/layout/Portal';

export default function StepContainer() {
	const [isModalOpen, setIsModalOpen] = useState<Boolean>(true);
	const closeModalHandler = () => {
		setIsModalOpen(false);
	};
	return (
		<div className={'p-1'}>
			<p>This is Container</p>
			{isModalOpen && (
				<Portal>
					<ModalWrapper
						Modal={LoginModal}
						isModal={isModalOpen}
						onCloseModal={closeModalHandler}
					/>
				</Portal>
			)}
		</div>
	);
}
