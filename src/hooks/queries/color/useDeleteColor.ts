import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useMemo } from 'react';
import { toast } from 'sonner';

import { colorService } from '@/services';

export function useDeleteColor() {
	const { colorId, storeId } = useParams<{
		colorId: string;
		storeId: string;
	}>();
	const queryClient = useQueryClient();

	const { mutate: deleteColor, isPending: isDeleting } = useMutation({
		mutationKey: ['color', 'delete'],
		mutationFn: () => colorService.delete(colorId),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['colors', storeId],
			});
			toast.success('Color deleted');
		},
		onError() {
			toast.error('An error occured while deleting a color');
		},
	});

	return useMemo(
		() => ({ deleteColor, isDeleting }),
		[deleteColor, isDeleting],
	);
}
