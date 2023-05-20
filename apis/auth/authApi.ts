import instance from '@apis/_axios/instance';
import { OAuthLoginParam } from '@apis/auth/authApi.type';
import { getToken } from '@utils/token';

export class AuthApi {
	createOAuthUser = async (body: OAuthLoginParam): Promise<LoginResponse> => {
		try {
			const res = await instance.post('/auth/oauth2/callback', body);
			return res.data;
		} catch (error) {
			console.log(error);
		}
	};

	logoutOauthUser = async () => {
		try {
			await instance.post('/auth/logout');
			localStorage.removeItem('state');
		} catch (error) {
			console.log(error);
		}
	};

	logoutGuestUser = async () => {
		try {
			await instance.delete('/auth/guest/logout');
		} catch (error) {
			console.log(error);
		}
	};

	createGuestUser = async (): Promise<LoginResponse> => {
		try {
			return await instance.post('/auth/guest/login');
		} catch (error) {
			console.log(error);
		}
	};

	getUser = async (): Promise<User | null> => {
		try {
			if (getToken()) {
				return await instance.get('/auth/me');
			} else {
				return null;
			}
		} catch (error) {
			console.log(error);
		}
	};
}

const authApi = new AuthApi();
export default authApi;
