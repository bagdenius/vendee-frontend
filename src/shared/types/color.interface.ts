export interface IColor {
	id: string;
	name: string;
	value: string;
	storeId: string;
	createdAt: string;
}

export interface IColorCreate extends Pick<IColor, 'name' | 'value'> {}

export interface IColorUpdate extends Pick<IColor, 'name' | 'value'> {}
