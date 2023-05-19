'use client';
import { getKakaoAuthUri, setOAuth2State } from '@utils/oauth2';

export default function Main() {
	const state = setOAuth2State();
	const url = getKakaoAuthUri(state);
	return (
		<div>
			메인 페이지
			<a href={url}>소셜 로그인</a>
		</div>
	);
}
