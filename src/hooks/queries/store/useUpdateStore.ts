import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useMemo } from 'react';
import { toast } from 'sonner';

import { IStoreUpdate } from '@/shared/types';

import { storeService } from '@/services';

export function useUpdateStore() {
	const { storeId } = useParams<{ storeId: string }>();
	const queryClient = useQueryClient();

	const { data: store, isPending } = useQuery({
		queryKey: ['store', storeId],
		queryFn: () => storeService.getById(storeId),
	});

	const { mutate: updateStore, isPending: isUpdating } = useMutation({
		mutationKey: ['store', 'update'],
		mutationFn: (data: IStoreUpdate) => storeService.update(storeId, data),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['profile'] });
			toast.success('Store updated');
		},
		onError() {
			toast.error('An error occured while updating a store');
		},
	});
	return useMemo(
		() => ({ store, updateStore, isUpdating }),
		[store, updateStore, isUpdating],
	);
}
