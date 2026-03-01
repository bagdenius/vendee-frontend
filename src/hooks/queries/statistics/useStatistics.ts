import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useMemo } from 'react';

import { statisticsService } from '@/services/statistics.service';

export const useStatistics = () => {
	const params = useParams<{ storeId: string }>();

	const { data: main } = useQuery({
		queryKey: ['main-statistics'],
		queryFn: () => statisticsService.getMain(params.storeId),
	});

	const { data: secondary } = useQuery({
		queryKey: ['secondary-statistics'],
		queryFn: () => statisticsService.getSecondary(params.storeId),
	});

	return useMemo(() => ({ main, secondary }), [main, secondary]);
};
