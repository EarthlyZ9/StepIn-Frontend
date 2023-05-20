export const setCookie = (name: string, value: string) => {
	const date = new Date();
	date.setTime(date.getTime() + 60 * 60 * 1000);
	document.cookie =
		name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
};

export const getCookie = (name: string) => {
	if (typeof document !== 'undefined') {
		const value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
		return value != null ? value[2] : null;
	}
};

export const removeCookie = (name: string) => {
	document.cookie =
		name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
};
