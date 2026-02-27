import { API_URL } from '@/shared/config';
import { IAuthForm, IAuthResponse } from '@/shared/types';

import {
	removeTokenFromStorage,
	saveTokenToStorage,
} from './auth-token.service';
import { axiosClassic } from '@/api';

class AuthService {
	async auth(type: 'login' | 'signup', data: IAuthForm) {
		const response = await axiosClassic<IAuthResponse>({
			url: API_URL.auth(`/${type}`),
			method: 'POST',
			data,
		});
		if (response.data.accessToken)
			saveTokenToStorage(response.data.accessToken);
		return response;
	}

	async refresh() {
		const response = await axiosClassic<IAuthResponse>({
			url: API_URL.auth('/refresh'),
			method: 'POST',
		});
		if (response.data.accessToken)
			saveTokenToStorage(response.data.accessToken);
		return response;
	}

	async logout() {
		const response = await axiosClassic<boolean>({
			url: API_URL.auth('/logout'),
			method: 'POST',
		});
		if (response.data) removeTokenFromStorage();
		return response;
	}
}

export const authService = new AuthService();
