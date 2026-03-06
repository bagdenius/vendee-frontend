'use client';

import { useQuery } from '@tanstack/react-query';

import Catalog from '@/components/ui/Catalog';

import { IProduct } from '@/shared/types';

import ProductGallery from './ProductGallery';
import ProductInfo from './ProductInfo';
import ProductReviews from './ProductReviews';
import { productService, reviewService } from '@/services';

interface ProductProps {
	initialProduct: IProduct;
	similarProducts: IProduct[];
	id?: string;
}

export default function Product({
	initialProduct,
	similarProducts,
	id = '',
}: ProductProps) {
	const { data: product } = useQuery({
		queryKey: ['product', id, 'get'],
		queryFn: () => productService.getById(id),
		initialData: initialProduct,
		enabled: !!id,
	});

	return (
		<div className='mx-auto max-w-7xl'>
			<div className='space-y-7 px-4 py-10 sm:px-6 lg:px-8'>
				<div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8'>
					<ProductGallery product={initialProduct} />
					<ProductInfo product={initialProduct} />
				</div>
				<Catalog title='Similar Products' products={similarProducts} />
				<ProductReviews product={product} />
			</div>
		</div>
	);
}
