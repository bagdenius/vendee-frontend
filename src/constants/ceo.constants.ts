export const SITE_TITLE_DEFAULT = 'Vendee';
export const SITE_TITLE_TEMPLATE = `${SITE_TITLE_DEFAULT} | %s`;

export const SITE_TITLE = {
	default: SITE_TITLE_DEFAULT,
	template: SITE_TITLE_TEMPLATE,
};

export const SITE_DESCIPTION =
	'Welcome to Vendee - modern global online marketplace and store where you can buy and sell products easily, securely, and without limits.';

export const SITE_KEYWORDS = [
	'online marketplace',
	'global marketplace',
	'online store',
	'buy products online',
	'sell products online',
	'ecommerce platform',
	'multi-vendor marketplace',
	'Vendee',
];

export const SITE_AUTHORS = [{ name: '@bagdenius' }];
export const SITE_CREATOR = '@bagdenius';
export const SITE_PUBLISHER = 'Vendee';

export const SITE_OPEN_GRAPH = {
	type: 'website',
	locale: 'en_US',
	url: 'https://vendee.com',
	title: 'Vendee – Global Online Marketplace',
	description:
		'Discover, buy and sell products worldwide with Vendee. A modern, secure, and scalable ecommerce platform.',
	siteName: 'Vendee',
	images: [
		{
			url: 'tbd',
			width: 1200,
			height: 630,
			alt: 'Vendee Global Marketplace',
		},
	],
};

export const SITE_TWITTER = {
	card: 'tbd',
	title: 'Vendee – Global Online Marketplace',
	description: 'Buy and sell products worldwide with Vendee.',
	creator: '@bagdenius',
	images: ['tbd'],
};

export const SITE_ROBOTS = { index: true, follow: true };
export const NO_INDEX_PAGE = { robots: { index: false, follow: false } };

export const SITE_CATEGORY = 'ecommerce';
