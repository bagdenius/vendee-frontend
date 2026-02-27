import { ICategory } from './category.interface';
import { IColor } from './color.interface';
import { IReview } from './review.interface';
import { IStore } from './store.interface';

export interface IProduct {
	id: string;
	title: string;
	description: string;
	price: number;
	images: string[];
	category: ICategory;
	reviews: IReview[];
	color: IColor;
	store: IStore;
}

export interface IProductCreate extends Pick<
	IProduct,
	'title' | 'description' | 'price' | 'images'
> {}
