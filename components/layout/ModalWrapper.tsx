type ModalProps = {
	Modal: JSX.Element;
	isModal: boolean;
	onCloseModal: (any) => void;
	hasCloseButton?: boolean;
	height?: string;
};

export default function ModalWrapper({
	Modal,
	isModal,
	onCloseModal,
	hasCloseButton = true,
	height,
}: ModalProps) {
	return (
		isModal && (
			<div
				className={`w-[30rem] ${
					height && `h-[${height}]`
				} p-4 justify-items-center flex flex-col my-auto`}
			>
				{hasCloseButton && (
					<button type={'button'} onClick={onCloseModal}>
						닫기 버튼
					</button>
				)}
				<Modal></Modal>
			</div>
		)
	);
}
