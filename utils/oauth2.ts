import * as process from 'process';
import { generateRandomString } from '@utils/random';

export const setOAuth2State = () => {
	const state = generateRandomString(32);
	if (typeof window !== 'undefined') {
		localStorage.setItem('state', state);
	}
	return state;
};

export const getGoogleAuthUri = (state: string) => {
	return `${process.env.NEXT_PUBLIC_GOOGLE_AUTHORIZATION_BASE_URI}
		?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
		&access_type=offline
		&include_granted_scopes=true
		&response_type=code
		&scope=${process.env.NEXT_PUBLIC_GOOGLE_SCOPE}
		&state=${state}
		&redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI}
		`;
};

export const getKakaoAuthUri = (state: string) => {
	return `${process.env.NEXT_PUBLIC_KAKAO_AUTHORIZATION_BASE_URI}
		?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}
		&client_secret=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET}
		&response_type=code
		&scope=${process.env.NEXT_PUBLIC_KAKAO_SCOPE}
		&state=${state}
		&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}
		`;
};

export const getNaverAuthUri = (state: string) => {
	return `${process.env.NEXT_PUBLIC_NAVER_AUTHORIZATION_BASE_URI}
		?client_id=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}
		&client_secret=${process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET}
		&response_type=code
		&scope=${process.env.NEXT_PUBLIC_NAVER_SCOPE}
		&state=${state}
		&redirect_uri=${process.env.NEXT_PUBLIC_NAVER_REDIRECT_URI}
		`;
};

export const unsetOAuth2State = () => {
	localStorage.removeItem('state');
};
