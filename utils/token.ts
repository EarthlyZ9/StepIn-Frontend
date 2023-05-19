import { getCookie, removeCookie, setCookie } from './cookie';

export const getToken = () => {
	return getCookie('stepIn');
};

export const setToken = (token: string) => {
	setCookie('stepIn', token);
};

export const deleteToken = () => {
	removeCookie('stepIn');
};
