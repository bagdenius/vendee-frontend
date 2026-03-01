import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useMemo } from 'react';

import { statisticsService } from '@/services/statistics.service';

export const useStatistics = () => {
	const { storeId } = useParams<{ storeId: string }>();

	const { data: main } = useQuery({
		queryKey: ['statistics', 'main', storeId],
		queryFn: () => statisticsService.getMain(storeId),
	});

	const { data: secondary } = useQuery({
		queryKey: ['statistics', 'secondary', storeId],
		queryFn: () => statisticsService.getSecondary(storeId),
	});

	return useMemo(() => ({ main, secondary }), [main, secondary]);
};
