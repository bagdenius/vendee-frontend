import { API_URL } from '@/shared/config';
import { IColor, IColorCreate, IColorUpdate } from '@/shared/types';

import { axiosClassic, axiosWithAuth } from '@/api';

class ColorService {
	async getAll() {
		const { data } = await axiosClassic<IColor[]>({
			url: API_URL.colors(),
			method: 'GET',
		});
		return data;
	}

	async getById(colorId: string) {
		const { data } = await axiosClassic<IColor[]>({
			url: API_URL.colors(`${colorId}`),
			method: 'GET',
		});
		return data;
	}

	async getByStoreId(storeId: string) {
		const { data } = await axiosClassic<IColor[]>({
			url: API_URL.colors(`/store/${storeId}`),
			method: 'GET',
		});
		return data;
	}

	async create(data: IColorCreate, storeId: string) {
		const { data: created } = await axiosWithAuth<IColor>({
			url: API_URL.colors(`/store/${storeId}`),
			method: 'POST',
			data,
		});
		return created;
	}

	async update(colorId: string, data: IColorUpdate) {
		const { data: updated } = await axiosWithAuth<IColor>({
			url: API_URL.colors(`${colorId}`),
			method: 'PUT',
			data,
		});
		return updated;
	}

	async delete(colorId: string) {
		await axiosWithAuth({
			url: API_URL.colors(`${colorId}`),
			method: 'DELETE',
		});
	}
}

export const colorService = new ColorService();
