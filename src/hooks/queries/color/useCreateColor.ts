import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useMemo } from 'react';
import { toast } from 'sonner';

import { IColorCreateUpdate } from '@/shared/types';

import { colorService } from '@/services';

export function useCreateColor() {
	const { storeId } = useParams<{ storeId: string }>();
	const queryClient = useQueryClient();

	const { mutate: createColor, isPending: isCreating } = useMutation({
		mutationKey: ['color', 'create'],
		mutationFn: (data: IColorCreateUpdate) =>
			colorService.create(data, storeId),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['colors', storeId] });
			toast.success('Color created');
		},
		onError() {
			toast.error('An error occured while creating a color');
		},
	});

	return useMemo(
		() => ({ createColor, isCreating }),
		[createColor, isCreating],
	);
}
