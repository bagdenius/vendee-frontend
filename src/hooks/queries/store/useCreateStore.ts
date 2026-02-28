import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
import { toast } from 'sonner';

import { STORE_URL } from '@/shared/config';
import { IStoreCreate } from '@/shared/types';

import { storeService } from '@/services';

export function useCreateStore() {
	const router = useRouter();
	const queryClient = useQueryClient();

	const { mutate: createStore, isPending: isCreating } = useMutation({
		mutationKey: ['create store'],
		mutationFn: (data: IStoreCreate) => storeService.create(data),
		onSuccess(store) {
			queryClient.invalidateQueries({ queryKey: ['profile'] });
			toast.success('Store created');
			router.push(STORE_URL.home(store.id));
		},
		onError() {
			toast.error('An error occured while creating store');
		},
	});
	return useMemo(
		() => ({ createStore, isCreating }),
		[createStore, isCreating],
	);
}
