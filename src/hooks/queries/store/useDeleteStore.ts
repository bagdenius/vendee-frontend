import { useMutation } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import { useMemo } from 'react';
import { toast } from 'sonner';

import { STORE_URL } from '@/shared/config';

import { storeService } from '@/services';

export function useDeleteStore() {
	const router = useRouter();
	const { storeId } = useParams<{ storeId: string }>();

	const { mutate: deleteStore, isPending: isDeleting } = useMutation({
		mutationKey: ['delete store'],
		mutationFn: () => storeService.delete(storeId),
		onSuccess() {
			toast.success('Store deleted');
			router.push(STORE_URL.home('/not-selected'));
		},
		onError() {
			toast.error('An error occured while deleting store');
		},
	});
	return useMemo(
		() => ({ deleteStore, isDeleting }),
		[deleteStore, isDeleting],
	);
}
