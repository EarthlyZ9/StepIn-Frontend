'use client';

import GoogleButton from '../../public/images/socialProvider/btn_google_signin_dark_normal_web@2x.png';
import KakaoButton from '../../public/images/socialProvider/kakao_login_large_narrow.png';
import NaverButton from '../../public/images/socialProvider/btnG_official.png';
import SocialLoginButton from '@components/auth/SocialLoginButton';
import { setOAuth2State } from '@utils/oauth2';
import GuestLoginButton from '@components/auth/GuestLoginButton';

export default function LoginModal() {
	const oAuthState = setOAuth2State();
	return (
		<div className={'flex items-center flex-col justify-items-center'}>
			<h3 className={'my-1 text-22'}>Step IN !</h3>
			{/*<p>for</p>*/}
			<h1 className={'text-16 mb-2'}>
				A new way for any Top-Down architecture design
			</h1>
			<div>
				<SocialLoginButton
					provider={'google'}
					state={oAuthState}
					imageSrc={GoogleButton}
				/>
				<SocialLoginButton
					provider={'kakao'}
					state={oAuthState}
					imageSrc={KakaoButton}
				/>
				<SocialLoginButton
					provider={'naver'}
					state={oAuthState}
					imageSrc={NaverButton}
				/>
				<GuestLoginButton />
			</div>
		</div>
	);
}
