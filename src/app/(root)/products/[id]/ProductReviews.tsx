import { Plus, Trash } from 'lucide-react';
import Image from 'next/image';
import { Rating } from 'react-simple-star-rating';

import ConfirmModal from '@/components/modals/ConfirmModal';
import ReviewModal from '@/components/modals/ReviewModal';
import { Button } from '@/components/ui/Button';

import { useDeleteReview } from '@/hooks/queries/reviews/useDeleteReview';
import { useProfile } from '@/hooks/useProfile';

import { IProduct } from '@/shared/types';

interface ProductReviewsProps {
	product: IProduct;
}

export default function ProductReviews({ product }: ProductReviewsProps) {
	const { user } = useProfile();
	const { deleteReview } = useDeleteReview();

	return (
		<>
			<div className='flex items-center justify-between'>
				<h1 className='text-2xl font-bold'>Reviews</h1>
				{user && (
					<ReviewModal storeId={product.storeId}>
						<Button variant='ghost'>
							<Plus /> Add review
						</Button>
					</ReviewModal>
				)}
			</div>
			<div className='grid gap-8 pt-0 sm:grid-cols-2 lg:grid-cols-4'>
				{product.reviews.length ? (
					product.reviews.map(review => (
						<div key={review.id} className='rounded-lg border p-4'>
							<div className='flex justify-between'>
								<div className='flex items-center gap-x-4 font-medium'>
									<Image
										className='rounded-full'
										src={review.user.avatar}
										alt={`Avatar of user ${review.user.name}`}
										width={40}
										height={40}
									/>
									{review.user.name}
								</div>
								{review.user.id === user?.id && (
									<ConfirmModal
										handleClick={() => deleteReview(review.id)}
										description='This action cannot be undone. It will permanently delete your review from our database.'
									>
										<Button
											variant='destructive'
											size='icon'
											className='-mt-3 -mr-2 bg-transparent text-red-500 hover:bg-transparent'
										>
											<Trash className='size-5' />
										</Button>
									</ConfirmModal>
								)}
							</div>
							<Rating
								readonly
								initialValue={review.rating}
								SVGstyle={{ display: 'inline-block' }}
								size={18}
								allowFraction
								transition
							/>
							<div className='text-muted-foreground mt-1 text-sm'>
								{review.text}
							</div>
						</div>
					))
				) : (
					<div className='mt-4'>This product don't have any reviews yet</div>
				)}
			</div>
		</>
	);
}
