import { ICategory } from './category.interface';
import { IColor } from './color.interface';
import { IReview } from './review.interface';

export interface IProduct {
	id: string;
	title: string;
	description: string;
	price: number;
	images: string[];
	category: ICategory;
	reviews: IReview[];
	color: IColor;
	storeId: string;
}

export interface IProductCreate extends Pick<
	IProduct,
	'title' | 'description' | 'price' | 'images'
> {}

export interface IProductUpdate extends Pick<
	IProduct,
	'title' | 'description' | 'price' | 'images' | 'category' | 'color'
> {}
