import { IUser } from './user.interface';

export interface IReview {
	id: string;
	text: string;
	rating: number;
	user: IUser;
	createdAt: string;
}

export interface IReviewCreate extends Pick<IReview, 'text' | 'rating'> {}

export interface IReviewUpdate extends Pick<IReview, 'text' | 'rating'> {}
