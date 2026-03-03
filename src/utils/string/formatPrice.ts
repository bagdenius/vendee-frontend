const currencyExponents: Record<string, number> = {
	USD: 2,
	EUR: 2,
	UAH: 2,
	JPY: 0,
	KWD: 3,
	BHD: 3,
};

export function formatPrice(
	amount: number,
	locale: string = 'en-US',
	currencyСode: string = 'USD',
) {
	const exponent = currencyExponents[currencyСode] ?? 2;
	const value = amount / Math.pow(10, exponent);
	return value.toLocaleString(locale, {
		style: 'currency',
		currency: currencyСode,
		maximumFractionDigits: exponent,
	});
}

export function parsePrice(
	value: number | string,
	currencyCode: string = 'USD',
): number {
	const exponent = currencyExponents[currencyCode] ?? 2;
	const numericValue =
		typeof value === 'string'
			? parseFloat(value.replace(/[^\d.-]/g, ''))
			: value;
	return Math.round(numericValue * Math.pow(10, exponent));
}

export function convertPriceToUnit(
	amount: number,
	currencyCode = 'USD',
): number {
	const exponent = currencyExponents[currencyCode] ?? 2;
	return amount / Math.pow(10, exponent);
}
