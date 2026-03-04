import type { Metadata } from 'next';

import Products from './Products';
import { productService } from '@/services';

export const metadata: Metadata = { title: 'Products catalog' };

// export const revalidate = 60;

async function getProducts() {
	return await productService.getAll();
}

export default async function ProductsPage() {
	const products = await getProducts();

	return <Products products={products} />;
}
