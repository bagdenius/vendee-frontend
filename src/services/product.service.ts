import { API_URL } from '@/shared/config';
import { IProduct, IProductCreate, IProductUpdate } from '@/shared/types';

import { axiosClassic, axiosWithAuth } from '@/api';

class ProductService {
	async getAll(searchTerm?: string) {
		const { data } = await axiosClassic<IProduct[]>({
			url: API_URL.products(),
			method: 'GET',
			params: searchTerm ? { searchTerm } : {},
		});
		return data;
	}

	async getById(productId: string) {
		const { data } = await axiosClassic<IProduct[]>({
			url: API_URL.products(`${productId}`),
			method: 'GET',
		});
		return data;
	}

	async getByStoreId(storeId: string) {
		const { data } = await axiosClassic<IProduct[]>({
			url: API_URL.products(`/store/${storeId}`),
			method: 'GET',
		});
		return data;
	}

	async getByCategoryId(categoryId: string) {
		const { data } = await axiosClassic<IProduct[]>({
			url: API_URL.products(`/category/${categoryId}`),
			method: 'GET',
		});
		return data;
	}

	async getPopular() {
		const { data } = await axiosClassic<IProduct[]>({
			url: API_URL.products('/popular'),
			method: 'GET',
		});
		return data;
	}

	async getSimilar(productId: string) {
		const { data } = await axiosClassic<IProduct[]>({
			url: API_URL.products(`/${productId}/similar`),
			method: 'GET',
		});
		return data;
	}

	async create(data: IProductCreate, storeId: string) {
		const { data: created } = await axiosWithAuth<IProduct>({
			url: API_URL.products(`/store/${storeId}`),
			method: 'POST',
			data,
		});
		return created;
	}

	async update(productId: string, data: IProductUpdate) {
		const { data: updated } = await axiosWithAuth<IProduct>({
			url: API_URL.products(`${productId}`),
			method: 'PUT',
			data,
		});
		return updated;
	}

	async delete(productId: string) {
		await axiosWithAuth({
			url: API_URL.products(`${productId}`),
			method: 'DELETE',
		});
	}
}

export const productService = new ProductService();
