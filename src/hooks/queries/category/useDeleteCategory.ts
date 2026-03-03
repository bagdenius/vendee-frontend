import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useMemo } from 'react';
import { toast } from 'sonner';

import { categoryService } from '@/services';

export function useDeleteCategory() {
	const { categoryId, storeId } = useParams<{
		categoryId: string;
		storeId: string;
	}>();
	const queryClient = useQueryClient();

	const { mutate: deleteCategory, isPending: isDeleting } = useMutation({
		mutationKey: ['category', 'delete'],
		mutationFn: () => categoryService.delete(categoryId),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['categories', storeId],
			});
			toast.success('Category deleted');
		},
		onError() {
			toast.error('An error occured while deleting a category');
		},
	});

	return useMemo(
		() => ({ deleteCategory, isDeleting }),
		[deleteCategory, isDeleting],
	);
}
