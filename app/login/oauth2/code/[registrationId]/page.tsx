'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import authApi from '@apis/auth/authApi';
import { useDispatch } from 'react-redux';
import { setToken } from '@utils/token';

export default function OAuth({ params }) {
	const router = useRouter();
	const searchParams = useSearchParams();
	const queryState = searchParams.get('state');
	const code = searchParams.get('code');
	const dispatch = useDispatch();

	const registrationId = params.registrationId;
	let state;
	if (typeof window !== 'undefined') {
		state = localStorage.getItem('state');
	}
	if (queryState === state) {
		authApi.createOAuthUser({ code, registrationId }).then((r) => {
			setToken(r.accessToken);
			dispatch({ type: 'patchUser', payload: r });
			router.push('/main');
		});
	}

	return null;
}
