import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useMemo } from 'react';

import { categoryService } from '@/services';

export function useCategories() {
	const { storeId } = useParams<{ storeId: string }>();

	const { data: categories, isPending } = useQuery({
		queryKey: ['categories', storeId],
		queryFn: () => categoryService.getByStoreId(storeId),
	});

	return useMemo(() => ({ categories, isPending }), [categories, isPending]);
}
