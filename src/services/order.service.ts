import { API_URL } from '@/shared/config';
import { IOrderPlace, IPaymentResponse } from '@/shared/types';

import { axiosWithAuth } from '@/api';

class OrderService {
	async place(data: IOrderPlace) {
		return axiosWithAuth<IPaymentResponse>({
			url: API_URL.orders(),
			method: 'POST',
			data,
		});
	}
}

export const orderService = new OrderService();
