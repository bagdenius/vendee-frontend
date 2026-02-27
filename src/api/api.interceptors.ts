import axios, { CreateAxiosDefaults } from 'axios';

import {
	getAccessToken,
	removeTokenFromStorage,
} from '@/services/auth-token.service';

import { SERVER_URL } from '@/shared/config';

import { errorCatch, getContentType } from './api.helpers';
import { authService } from '@/services';

const options: CreateAxiosDefaults = {
	baseURL: SERVER_URL,
	headers: getContentType(),
	withCredentials: true,
};

export const axiosClassic = axios.create(options);
export const axiosWithAuth = axios.create(options);

axiosWithAuth.interceptors.request.use(config => {
	const accessToken = getAccessToken();
	if (config.headers && accessToken)
		config.headers.Authorization = `Bearer ${accessToken}`;
	return config;
});

axiosWithAuth.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config;
		if (
			error?.response?.status === 401 ||
			errorCatch(error) === 'jwt expired' ||
			(errorCatch(error) === 'jwt must be provided' &&
				error.config &&
				!error.config._isRetry)
		) {
			originalRequest._isRetry = true;
			try {
				await authService.refresh();
				return axiosWithAuth.request(originalRequest);
			} catch (error) {
				if (errorCatch(error) === 'jwt expired') removeTokenFromStorage();
			}
		}
		throw error;
	},
);
