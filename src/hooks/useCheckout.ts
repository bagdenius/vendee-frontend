import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
import { toast } from 'sonner';

import { useActions } from './useActions';
import { useCart } from './useCart';
import { orderService } from '@/services';

export const useCheckout = () => {
	const { items } = useCart();
	const { reset } = useActions();
	const router = useRouter();

	const { mutate: createOrder, isPending: isCreating } = useMutation({
		mutationKey: ['order', 'create'],
		mutationFn: () =>
			orderService.place({
				items: items.map(item => ({
					price: item.price,
					quantity: item.quantity,
					productId: item.product.id,
					storeId: item.product.storeId,
				})),
			}),
		onSuccess({ data }) {
			console.log(data);
			router.push(data.checkoutUrl);
			reset();
		},
		onError: () => toast.error('Failed to create order'),
	});

	return useMemo(
		() => ({ createOrder, isCreating }),
		[createOrder, isCreating],
	);
};
