'use client';

import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';

import Catalog from '@/components/ui/Catalog';

import { IProduct } from '@/shared/types';

import { productService } from '@/services';

interface ProductsProps {
	products: IProduct[];
}

export default function Products({ products }: ProductsProps) {
	const searchParams = useSearchParams();
	const searchTerm = searchParams.get('searchTerm') || undefined;
	const { data } = useQuery({
		queryKey: ['products', searchTerm, 'get'],
		queryFn: () => productService.getAll(searchTerm),
		initialData: products,
	});
	return (
		<div className='my-6'>
			<Catalog
				title={
					searchTerm ? `Results for "${searchTerm}" search` : 'Products catalog'
				}
				products={data}
			/>
		</div>
	);
}
