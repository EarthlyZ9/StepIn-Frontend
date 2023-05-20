import authApi from '../../apis/auth/authApi';
import { useRouter } from 'next/navigation';
import { setToken } from '@utils/token';

export default function GuestLoginButton() {
	const router = useRouter();
	const guestLoginHandler = () => {
		authApi.createGuestUser().then((r) => {
			console.log(r);
			setToken(r.accessToken);
			router.push('/main');
		});
	};

	return (
		<div className={'my-10 text-center'}>
			빠르게 서비스를 경험해보려면?
			<span
				onClick={guestLoginHandler}
				className={
					'underline underline-offset-1 mx-2 cursor-pointer font-bold'
				}
			>
				게스트로 로그인하기
			</span>
			<br />
			<span className={'text-gray-7 text-11'}>
				게스트로 서비스 이용 시, 프로젝트 생성 및 저장에 제한이
				있습니다.
			</span>
		</div>
	);
}
