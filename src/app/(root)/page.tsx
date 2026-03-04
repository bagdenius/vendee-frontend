import type { Metadata } from 'next';

import Home from './Home';
import { productService } from '@/services';

export const metadata: Metadata = { title: 'Global Online Marketplace' };

// export const revalidate = 60;

async function getProducts() {
	return (await productService.getPopular()).slice(0, 12);
}

export default async function HomePage() {
	const products = await getProducts();

	return <Home products={products} />;
}
