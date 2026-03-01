'use client';

import { Plus } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

import { DataTable } from '@/components/data-table/DataTable';
import DataTableLoading from '@/components/data-table/DataTableLoading';
import { Button } from '@/components/ui/Button';
import Heading from '@/components/ui/Heading';

import { useProducts } from '@/hooks/queries/products/useProducts';

import { STORE_URL } from '@/shared/config';

import { formatPrice } from '@/utils/string/formatPrice';

import { IProductColumn, productColumns } from './ProductColumns';

export default function Products() {
	const { storeId } = useParams<{ storeId: string }>();
	const { products, isPending } = useProducts();
	console.log(products);

	const formattedProducts: IProductColumn[] = products
		? products.map(product => ({
				id: product.id,
				title: product.title,
				price: formatPrice(product.price),
				category: product.category.title,
				color: product.color.value,
				storeId: product.storeId,
			}))
		: [];

	return (
		<div className='p-6'>
			{isPending ? (
				<DataTableLoading />
			) : (
				<>
					<div className='flex items-center justify-between'>
						<Heading
							title={`Products (${products?.length})`}
							description='All products from your store'
						/>
						<div className='flex items-center gap-x-4'>
							<Link href={STORE_URL.productCreate(storeId)}>
								<Button>
									<Plus className='size-4' /> Create
								</Button>
							</Link>
						</div>
					</div>
					<div className='mt-3'>
						<DataTable
							columns={productColumns}
							data={formattedProducts}
							filterKey='title'
						/>
					</div>
				</>
			)}
		</div>
	);
}
