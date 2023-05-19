'use client';
import { useSearchParams } from 'next/navigation';
import authApi from '@apis/auth/authApi';

export default function OAuth({ params }) {
	const searchParams = useSearchParams();
	const queryState = searchParams.get('state');
	const code = searchParams.get('code');

	const registrationId = params.registrationId;
	const state = localStorage.getItem('state');
	if (queryState === state) {
		authApi
			.createOAuthUser({ code, registrationId })
			.then((r) => console.log(r));
	}

	return null;
}
