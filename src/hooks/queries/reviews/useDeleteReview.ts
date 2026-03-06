import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { toast } from 'sonner';

import { reviewService } from '@/services';

export function useDeleteReview() {
	const queryClient = useQueryClient();

	const { mutate: deleteReview, isPending: isDeleting } = useMutation({
		mutationKey: ['reviews', 'delete'],
		mutationFn: (reviewId: string) => reviewService.delete(reviewId),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['product'] });
			toast.success('Review deleted');
		},
		onError: () => toast.error('Failed to delete review'),
	});

	return useMemo(
		() => ({ deleteReview, isDeleting }),
		[deleteReview, isDeleting],
	);
}
