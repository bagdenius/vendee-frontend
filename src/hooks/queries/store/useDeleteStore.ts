import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import { useMemo } from 'react';
import { toast } from 'sonner';

import { STORE_URL } from '@/shared/config';

import { storeService } from '@/services';

export function useDeleteStore() {
	const router = useRouter();
	const { storeId } = useParams<{ storeId: string }>();
	const queryClient = useQueryClient();

	const { mutate: deleteStore, isPending: isDeleting } = useMutation({
		mutationKey: ['store', 'delete'],
		mutationFn: () => storeService.delete(storeId),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['profile'] });
			toast.success('Store deleted');
			router.push(STORE_URL.home('/not-selected'));
		},
		onError() {
			toast.error('An error occured while deleting a store');
		},
	});
	return useMemo(
		() => ({ deleteStore, isDeleting }),
		[deleteStore, isDeleting],
	);
}
