import { API_URL } from '@/shared/config';
import { IReview, IReviewCreate, IReviewUpdate } from '@/shared/types';

import { axiosClassic, axiosWithAuth } from '@/api';

class ReviewService {
	async getByStoreId(storeId: string) {
		const { data } = await axiosClassic<IReview[]>({
			url: API_URL.reviews(`/store/${storeId}`),
			method: 'GET',
		});
		return data;
	}

	async create(data: IReviewCreate, storeId: string, productId: string) {
		const { data: created } = await axiosWithAuth<IReview>({
			url: API_URL.reviews(`/store/${storeId}/product/${productId}`),
			method: 'POST',
			data,
		});
		return created;
	}

	async update(reviewId: string, data: IReviewUpdate) {
		const { data: updated } = await axiosWithAuth<IReview>({
			url: API_URL.reviews(`${reviewId}`),
			method: 'PUT',
			data,
		});
		return updated;
	}

	async delete(reviewId: string) {
		await axiosWithAuth({
			url: API_URL.reviews(`${reviewId}`),
			method: 'DELETE',
		});
	}
}

export const reviewService = new ReviewService();
