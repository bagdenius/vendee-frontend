import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import { useMemo } from 'react';
import { toast } from 'sonner';

import { IProductCreate } from '@/shared/types';

import { productService } from '@/services';

export function useCreateProduct() {
	const { storeId } = useParams<{ storeId: string }>();
	const queryClient = useQueryClient();

	const { mutate: createProduct, isPending: isCreating } = useMutation({
		mutationKey: ['product', 'create'],
		mutationFn: (data: IProductCreate) => productService.create(data, storeId),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['products', storeId] });
			toast.success('Product created');
		},
		onError() {
			toast.error('An error occured while creating a product');
		},
	});

	return useMemo(
		() => ({ createProduct, isCreating }),
		[createProduct, isCreating],
	);
}
