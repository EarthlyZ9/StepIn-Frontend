'use client';

import { getKakaoAuthUri, setOAuth2State } from '@utils/oauth2';

const state = setOAuth2State();
const url = getKakaoAuthUri(state);

export default function LoginModal() {
	return (
		<div>
			<p>로그인 모달</p>
			<a href={url}>소셜 로그인</a>
		</div>
	);
}
