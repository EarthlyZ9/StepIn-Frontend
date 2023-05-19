import instance from '@apis/_axios/instance';

export class AuthApi {
	createOAuthUser = async (req) => {
		try {
			return await instance.post('/auth/oauth2/callback', req);
		} catch (error) {
			console.log(error);
		}
	};

	logoutOauthUser = async () => {
		try {
			await instance.post('/auth/logout');
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

	createGuestUser = async () => {
		try {
			return await instance.post('/auth/guest/login');
		} catch (error) {
			console.log(error);
		}
	};
}

const authApi = new AuthApi();
export default authApi;
