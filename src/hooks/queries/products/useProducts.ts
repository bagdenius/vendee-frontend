import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useMemo } from 'react';

import { productService } from '@/services';

export function useProducts() {
	const { storeId } = useParams<{ storeId: string }>();

	const { data: products, isPending } = useQuery({
		queryKey: ['products', storeId],
		queryFn: () => productService.getByStoreId(storeId),
	});

	return useMemo(() => ({ products, isPending }), [products, isPending]);
}
