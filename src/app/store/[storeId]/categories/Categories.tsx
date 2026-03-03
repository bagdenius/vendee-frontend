'use client';

import { Plus } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

import { DataTable } from '@/components/data-table/DataTable';
import DataTableLoading from '@/components/data-table/DataTableLoading';
import { Button } from '@/components/ui/Button';
import Heading from '@/components/ui/Heading';

import { useCategories } from '@/hooks/queries/category/useCategories';

import { STORE_URL } from '@/shared/config';
import { ICategory } from '@/shared/types';

import { formatDate } from '@/utils/date/formatDate';

import { categoryColumns } from './CategoryColumns';

export default function Categories() {
	const { storeId } = useParams<{ storeId: string }>();
	const { categories, isPending } = useCategories();
	console.log(categories);

	const formattedCategories: ICategory[] = categories
		? categories.map(category => ({
				id: category.id,
				title: category.title,
				description: category.description,
				storeId: category.storeId,
				createdAt: formatDate(category.createdAt),
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
							title={`Categories (${categories?.length || '0'})`}
							description='All categories from your store'
						/>
						<div className='flex items-center gap-x-4'>
							<Link href={STORE_URL.categoryCreate(storeId)}>
								<Button>
									<Plus className='size-4' /> Create
								</Button>
							</Link>
						</div>
					</div>
					<div className='mt-3'>
						<DataTable
							columns={categoryColumns}
							data={formattedCategories}
							filterKey='title'
						/>
					</div>
				</>
			)}
		</div>
	);
}
