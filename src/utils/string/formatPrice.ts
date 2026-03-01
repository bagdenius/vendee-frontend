export function formatPrice(
	price: number,
	locale: string = 'en-US',
	currency: string = 'USD',
) {
	return price.toLocaleString(locale, {
		style: 'currency',
		currency,
		maximumFractionDigits: 2,
	});
}
