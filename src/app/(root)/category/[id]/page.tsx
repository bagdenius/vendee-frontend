import type { Metadata } from 'next';

import Catalog from '@/components/ui/Catalog';

import { categoryService, productService } from '@/services';

async function getProducts(id: string) {
	const products = await productService.getByCategoryId(id);
	const category = await categoryService.getById(id);
	return { products, category };
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ id: string }>;
}): Promise<Metadata> {
	const { id } = await params;
	const { category, products } = await getProducts(id);

	return {
		title: category.title,
		description: category.description,
		openGraph: {
			images: products.length
				? [
						{
							url: products[0].images[0],
							width: 1000,
							height: 1000,
							alt: category.title,
						},
					]
				: [],
		},
	};
}

export default async function CategoryPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const { category, products } = await getProducts(id);

	return (
		<div className='my-6'>
			<Catalog
				title={category.title}
				description={category.description}
				products={products}
			/>
		</div>
	);
}
