import { API_URL } from '@/shared/config';
import { IMainStatistics, ISecondaryStatistics } from '@/shared/types';

import { axiosWithAuth } from '@/api';

class StatisticsService {
	async getMain(storeId: string) {
		const { data } = await axiosWithAuth<IMainStatistics[]>({
			url: API_URL.statistics(`/${storeId}/main`),
			method: 'GET',
		});
		return data;
	}

	async getSecondary(storeId: string) {
		const { data } = await axiosWithAuth<ISecondaryStatistics>({
			url: API_URL.statistics(`/${storeId}/secondary`),
			method: 'GET',
		});
		return data;
	}
}

export const statisticsService = new StatisticsService();
