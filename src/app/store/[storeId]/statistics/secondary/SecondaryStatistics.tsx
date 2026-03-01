'use client';

import { useStatistics } from '@/hooks/queries/statistics/useStatistics';

import LastUsers from './LastUsers';
import Overview from './Overview';

export default function SecondaryStatistics() {
	const { secondary } = useStatistics();

	return (
		<div className='mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-8'>
			{secondary?.monthlySales.length || secondary?.lastUsers.length ? (
				<>
					<div className='col-span-1 xl:col-span-5'>
						<Overview data={secondary.monthlySales} />
					</div>
					<div className='col-span-1 xl:col-span-3'>
						<LastUsers data={secondary.lastUsers} />
					</div>
				</>
			) : (
				<div>No statistics data</div>
			)}
		</div>
	);
}
