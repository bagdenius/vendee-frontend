export interface ICategory {
	id: string;
	title: string;
	description: string;
	storeId: string;
	createdAt: string;
}

export interface ICategoryCreate extends Pick<
	ICategory,
	'title' | 'description'
> {}

export interface ICategoryUpdate extends Pick<
	ICategory,
	'title' | 'description'
> {}
