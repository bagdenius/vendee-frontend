import { API_URL } from '@/shared/config';
import { IStore, IStoreCreate, IStoreUpdate } from '@/shared/types';

import { axiosWithAuth } from '@/api';

class StoreService {
	async getById(storeId: string) {
		const { data } = await axiosWithAuth<IStore>({
			url: API_URL.stores(`/${storeId}`),
			method: 'GET',
		});
		return data;
	}

	async create(data: IStoreCreate) {
		const { data: created } = await axiosWithAuth<IStore>({
			url: API_URL.stores(),
			method: 'POST',
			data,
		});
		return created;
	}

	async update(storeId: string, data: IStoreUpdate) {
		const { data: updated } = await axiosWithAuth<IStore>({
			url: API_URL.stores(`/${storeId}`),
			method: 'PUT',
			data,
		});
		return updated;
	}

	async delete(storeId: string) {
		await axiosWithAuth({
			url: API_URL.stores(`/${storeId}`),
			method: 'DELETE',
		});
	}
}

export const storeService = new StoreService();
