import { getCookie, removeCookie, setCookie } from './cookie';

export const getToken = () => {
	return getCookie('step-in-access-token');
};

export const setToken = (token: string) => {
	setCookie('step-in-access-token', token);
};

export const deleteToken = () => {
	removeCookie('step-in-access-token');
};
