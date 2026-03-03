import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useMemo } from 'react';
import { toast } from 'sonner';

import { ICategoryCreateUpdate } from '@/shared/types';

import { categoryService } from '@/services';

export function useCreateCategory() {
	const { storeId } = useParams<{ storeId: string }>();
	const queryClient = useQueryClient();

	const { mutate: createCategory, isPending: isCreating } = useMutation({
		mutationKey: ['category', 'create'],
		mutationFn: (data: ICategoryCreateUpdate) =>
			categoryService.create(data, storeId),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['categories', storeId] });
			toast.success('Category created');
		},
		onError() {
			toast.error('An error occured while creating a category');
		},
	});

	return useMemo(
		() => ({ createCategory, isCreating }),
		[createCategory, isCreating],
	);
}
