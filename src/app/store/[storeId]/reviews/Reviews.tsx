'use client';

import { useParams } from 'next/navigation';

import { DataTable } from '@/components/data-table/DataTable';
import DataTableLoading from '@/components/data-table/DataTableLoading';
import Heading from '@/components/ui/Heading';

import { useReviews } from '@/hooks/queries/reviews/useReviews';

import { formatDate } from '@/utils/date/formatDate';

import { IReviewColumn, reviewColumns } from './ReviewColumns';

export default function Reviews() {
	const { storeId } = useParams<{ storeId: string }>();
	const { reviews, isPending } = useReviews();
	console.log(reviews);

	const formattedReviews: IReviewColumn[] = reviews
		? reviews.map(review => ({
				id: review.id,
				rating: Array.from({ length: review.rating })
					.map(() => '⭐')
					.join(' '),
				product: review.product.title,
				text: review.text,
				username: review.user.name,
				createdAt: formatDate(review.createdAt),
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
							title={`Reviews (${reviews?.length || '0'})`}
							description='All product reviews from your store'
						/>
					</div>
					<div className='mt-3'>
						<DataTable
							columns={reviewColumns}
							data={formattedReviews}
							filterKey='product'
						/>
					</div>
				</>
			)}
		</div>
	);
}
