import { API_URL } from '@/shared/config';
import { IUser } from '@/shared/types';

import { axiosWithAuth } from '@/api';

class UserService {
	async getProfile() {
		const { data } = await axiosWithAuth<IUser>({
			url: API_URL.users('/profile'),
			method: 'GET',
		});
		return data;
	}

	async toggleFavorite(productId: string) {
		return await axiosWithAuth({
			url: API_URL.users(`/profile/favorites/${productId}`),
			method: 'PATCH',
		});
	}
}

export const userService = new UserService();
