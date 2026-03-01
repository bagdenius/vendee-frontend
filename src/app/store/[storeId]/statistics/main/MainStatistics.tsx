'use client';

import { useStatistics } from '@/hooks/queries/statistics/useStatistics';

import MainStatisticsItem from './MainStatisticsItem';

export default function MainStatistics() {
	const { main } = useStatistics();

	return (
		<div className='mt-3 grid grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4'>
			{main?.length ? (
				main.map(item => <MainStatisticsItem key={item.id} item={item} />)
			) : (
				<div>No statistics data</div>
			)}
		</div>
	);
}
