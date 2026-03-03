export interface IColor {
	id: string;
	name: string;
	value: string;
	storeId: string;
	createdAt: string;
}

export interface IColorCreateUpdate extends Pick<IColor, 'name' | 'value'> {}
