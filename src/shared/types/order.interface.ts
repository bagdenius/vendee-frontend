import { ICartItem } from './cart.interface';
import { IUser } from './user.interface';

export interface IPaymentResponse {
	checkoutUrl: string;
}

export interface IOrder {
	id: string;
	items: ICartItem[];
	status: OrderStatus;
	user: IUser;
	total: number;
	createdAt: string;
}

export interface IOrderPlace {
	status?: OrderStatus;
	items: IOrderItem[];
}

export type OrderStatus = 'PENDING' | 'PAID';

export interface IOrderItem {
	quantity: number;
	price: number;
	storeId: string;
	productId: string;
}
