import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useMemo } from 'react';

import { reviewService } from '@/services';

export const useReviews = () => {
	const { storeId } = useParams<{ storeId: string }>();

	const { data: reviews, isPending } = useQuery({
		queryKey: ['reviews', storeId, 'get'],
		queryFn: () => reviewService.getByStoreId(storeId),
	});

	return useMemo(() => ({ reviews, isPending }), [reviews, isPending]);
};
