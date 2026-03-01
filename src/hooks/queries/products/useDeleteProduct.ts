import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useMemo } from 'react';
import { toast } from 'sonner';

import { productService } from '@/services';

export function useDeleteProduct() {
	const { storeId } = useParams<{ storeId: string }>();
	const queryClient = useQueryClient();

	const { mutate: deleteProduct, isPending: isCreating } = useMutation({
		mutationKey: ['product', 'delete'],
		mutationFn: () => productService.delete(storeId),
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
		() => ({ deleteProduct, isCreating }),
		[deleteProduct, isCreating],
	);
}
