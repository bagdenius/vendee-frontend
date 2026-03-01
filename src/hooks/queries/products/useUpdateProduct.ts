import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useMemo } from 'react';
import { toast } from 'sonner';

import { IProductUpdate } from '@/shared/types';

import { productService } from '@/services';

export function useUpdateProduct() {
	const { productId, storeId } = useParams<{
		productId: string;
		storeId: string;
	}>();
	const queryClient = useQueryClient();

	const { mutate: updateProduct, isPending: isUpdating } = useMutation({
		mutationKey: ['product', 'update'],
		mutationFn: (data: IProductUpdate) =>
			productService.update(productId, data),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['products', storeId] });
			toast.success('Product updated');
		},
		onError() {
			toast.error('An error occured while creating a product');
		},
	});

	return useMemo(
		() => ({ updateProduct, isUpdating }),
		[updateProduct, isUpdating],
	);
}
