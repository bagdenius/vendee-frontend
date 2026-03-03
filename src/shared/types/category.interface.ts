export interface ICategory {
	id: string;
	title: string;
	description: string;
	storeId: string;
	createdAt: string;
}

export interface ICategoryCreateUpdate extends Pick<
	ICategory,
	'title' | 'description'
> {}
