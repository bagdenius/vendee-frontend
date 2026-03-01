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
