import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useMemo } from 'react';
import { toast } from 'sonner';

import { IColorCreateUpdate } from '@/shared/types';

import { colorService } from '@/services';

export function useUpdateColor() {
	const { colorId, storeId } = useParams<{
		colorId: string;
		storeId: string;
	}>();
	const queryClient = useQueryClient();

	const { mutate: updateColor, isPending: isUpdating } = useMutation({
		mutationKey: ['color', 'update'],
		mutationFn: (data: IColorCreateUpdate) =>
			colorService.update(colorId, data),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['colors', storeId] });
			toast.success('Color updated');
		},
		onError() {
			toast.error('An error occured while creating a color');
		},
	});

	return useMemo(
		() => ({ updateColor, isUpdating }),
		[updateColor, isUpdating],
	);
}
