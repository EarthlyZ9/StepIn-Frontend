import axios from "axios";
import { deleteToken, getToken, setToken } from '@utils/token';

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

const setAuthorHeader = (token: string) => {
    if (token)
        instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const unsetAuthorHeader = () => {
    delete instance.defaults.headers.common['Authorization'];
};

const refreshToken = async () => {
    return await instance
        .post('/auth/token/refresh')
        .then((res) => res.data);
};

instance.interceptors.request.use(
    async (config) => {
        const token = getToken();
        token && setAuthorHeader(token);
        return config;
    },
    (error) => {
        Promise.reject(error).then(r => console.log(r));
    },
);

instance.interceptors.response.use(
    (res) => {
        return res;
    },
    async (error) => {
        const { config: reqData } = error || {};
        if (error.response.status === 401) {
            if(error.response.data.message === 'Invalid credentials'){
                deleteToken();
                const tokenRes = await refreshToken();
                if (tokenRes.data) {
                    const access = tokenRes.data.accessToken;
                    setToken(access);
                    setAuthorHeader(access);
                    reqData.headers.Authorization = `Bearer ${access}`;
                    return instance(reqData);
                }
            }
            else if(error.response.data.message === 'Authentication needed'){
                deleteToken();
                //TODO. 전역 관리 중인 유저 정보 비우고 로그인 페이지로 리다이렉트
                unsetAuthorHeader();
                window.alert("토큰이 만료되어 자동으로 로그아웃 되었습니다.");
            }
        }
    },
);

export default instance;
