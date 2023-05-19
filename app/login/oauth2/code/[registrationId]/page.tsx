'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import authApi from '@apis/auth/authApi';

export default function OAuth({ params }) {
	console.log('oauth');
	const router = useRouter();
	const searchParams = useSearchParams();
	const queryState = searchParams.get('state');
	const code = searchParams.get('code');

	const registrationId = params.registrationId;
	let state;
	if (typeof window !== 'undefined') {
		state = localStorage.getItem('state');
	}
	if (queryState === state) {
		authApi.createOAuthUser({ code, registrationId }).then((r) => {
			console.log(r);
			router.push('/main');
		});
	}

	return null;
}
