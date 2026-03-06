import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useMemo } from 'react';
import { toast } from 'sonner';

import { IReviewCreateUpdate } from '@/shared/types';

import { reviewService } from '@/services';

export function useCreateReview(storeId: string) {
	const { id } = useParams<{ id: string }>();
	const queryClient = useQueryClient();

	const { mutate: createReview, isPending: isCreating } = useMutation({
		mutationKey: ['reviews', 'create'],
		mutationFn: (data: IReviewCreateUpdate) =>
			reviewService.create(data, storeId, id),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['product', id, 'get'] });
			toast.success('Review created');
		},
		onError: () => toast.error('Failed to create review'),
	});

	return useMemo(
		() => ({ createReview, isCreating }),
		[createReview, isCreating],
	);
}
