import { API_URL } from '@/shared/config';
import { ICategory, ICategoryCreate, ICategoryUpdate } from '@/shared/types';

import { axiosClassic, axiosWithAuth } from '@/api';

class CategoryService {
	async getAll() {
		const { data } = await axiosClassic<ICategory[]>({
			url: API_URL.categories(),
			method: 'GET',
		});
		return data;
	}

	async getById(categoryId: string) {
		const { data } = await axiosClassic<ICategory[]>({
			url: API_URL.categories(`${categoryId}`),
			method: 'GET',
		});
		return data;
	}

	async getByStoreId(storeId: string) {
		const { data } = await axiosClassic<ICategory[]>({
			url: API_URL.categories(`/store/${storeId}`),
			method: 'GET',
		});
		return data;
	}

	async create(data: ICategoryCreate, storeId: string) {
		const { data: created } = await axiosWithAuth<ICategory>({
			url: API_URL.categories(`/store/${storeId}`),
			method: 'POST',
			data,
		});
		return created;
	}

	async update(categoryId: string, data: ICategoryUpdate) {
		const { data: updated } = await axiosWithAuth<ICategory>({
			url: API_URL.categories(`${categoryId}`),
			method: 'PUT',
			data,
		});
		return updated;
	}

	async delete(categoryId: string) {
		await axiosWithAuth({
			url: API_URL.categories(`${categoryId}`),
			method: 'DELETE',
		});
	}
}

export const categoryService = new CategoryService();
