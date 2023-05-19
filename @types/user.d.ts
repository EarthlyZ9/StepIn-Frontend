interface User extends BaseResponseAttributes {
	nickname: string;
	email: string;
	imageUrl: string | null;
	isActive: Boolean;
	role: string;
	socialProviderType: string;
	socialId: string;
}

interface LoginResponse extends User {
	accessToken: string;
}
