import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useMemo } from 'react';
import { toast } from 'sonner';

import { productService } from '@/services';

export function useDeleteProduct() {
	const { productId, storeId } = useParams<{
		productId: string;
		storeId: string;
	}>();
	const queryClient = useQueryClient();

	const { mutate: deleteProduct, isPending: isDeleting } = useMutation({
		mutationKey: ['product', 'delete'],
		mutationFn: () => productService.delete(productId),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['products', storeId],
			});
			toast.success('Product deleted');
		},
		onError() {
			toast.error('An error occured while deleting a product');
		},
	});

	return useMemo(
		() => ({ deleteProduct, isDeleting }),
		[deleteProduct, isDeleting],
	);
}
