import Image from 'next/image';
import {
	getGoogleAuthUri,
	getKakaoAuthUri,
	getNaverAuthUri,
} from '@utils/oauth2';

type SocialLoginButtonProps = {
	provider: string;
	state: string;
	imageSrc: any;
};

export default function SocialLoginButton({
	provider,
	state,
	imageSrc,
}: SocialLoginButtonProps) {
	let redirectUrl;

	if (provider === 'kakao') redirectUrl = getKakaoAuthUri(state);
	else if (provider === 'google') redirectUrl = getGoogleAuthUri(state);
	else if (provider === 'naver') redirectUrl = getNaverAuthUri(state);

	return (
		<div
			className={`w-40 ${
				provider === 'google' &&
				`border-2 border-solid border-social-google bg-social-google`
			} my-2 h-10 mx-auto overflow-hidden rounded-sm`}
		>
			<a href={redirectUrl}>
				<Image
					src={imageSrc}
					alt={`${provider} login button`}
					placeholder={'blur'}
					style={{
						objectFit: 'cover',
						width: '100%',
						height: '100%',
					}}
				/>
			</a>
		</div>
	);
}
