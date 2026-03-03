import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useMemo } from 'react';
import { toast } from 'sonner';

import { ICategoryCreateUpdate } from '@/shared/types';

import { categoryService } from '@/services';

export function useUpdateCategory() {
	const { categoryId, storeId } = useParams<{
		categoryId: string;
		storeId: string;
	}>();
	const queryClient = useQueryClient();

	const { mutate: updateCategory, isPending: isUpdating } = useMutation({
		mutationKey: ['category', 'update'],
		mutationFn: (data: ICategoryCreateUpdate) =>
			categoryService.update(categoryId, data),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['categories', storeId] });
			toast.success('Category updated');
		},
		onError() {
			toast.error('An error occured while creating a category');
		},
	});

	return useMemo(
		() => ({ updateCategory, isUpdating }),
		[updateCategory, isUpdating],
	);
}
