import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useMemo } from 'react';

import { colorService } from '@/services';

export function useColors() {
	const { storeId } = useParams<{ storeId: string }>();

	const { data: colors, isPending } = useQuery({
		queryKey: ['colors', storeId],
		queryFn: () => colorService.getByStoreId(storeId),
	});

	return useMemo(() => ({ colors, isPending }), [colors, isPending]);
}
