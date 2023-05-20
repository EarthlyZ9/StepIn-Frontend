type ButtonProps = {
	onClickHandler: (any) => void;
	message: string;
};

export default function Button({ onClickHandler, message }: ButtonProps) {
	return (
		<div>
			<button
				type={'button'}
				onClick={onClickHandler}
				className={'bg-primary-navy-1 rounded-sm text-white p-3'}
			>
				{message}
			</button>
		</div>
	);
}
