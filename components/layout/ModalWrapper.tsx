interface ModalProps {
	Modal: JSX.Element;
	isModal: boolean;
	onCloseModal: (any) => void;
}

export default function ModalWrapper({
	Modal,
	isModal,
	onCloseModal,
}: ModalProps) {
	return (
		isModal && (
			<div className={'w-[50rem] h-[40rem]'}>
				<button type={'button'} onClick={onCloseModal}>
					닫기 버튼
				</button>
				<Modal></Modal>
			</div>
		)
	);
}
