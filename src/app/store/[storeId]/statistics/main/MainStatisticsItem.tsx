'use client';

import CountUp from 'react-countup';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

import { IMainStatistics } from '@/shared/types';

import { formatPrice } from '@/utils/string/formatPrice';

import { getIcon } from './main-statistics.util';

interface MainStatisticsItemProps {
	item: IMainStatistics;
}

export default function MainStatisticsItem({ item }: MainStatisticsItemProps) {
	const Icon = getIcon(item.id);

	return (
		<Card className='gap-1 border-none p-0 drop-shadow-sm'>
			<CardHeader className='flex flex-row items-center justify-between space-y-0 p-4 pb-2'>
				<CardTitle className='text-primary/80 text-sm font-medium'>
					{item.name}
				</CardTitle>
				<Icon className='size-5' />
			</CardHeader>
			<CardContent className='px-4 py-2'>
				<h2 className='text-2xl font-bold'>
					{item.id !== 1 ? (
						<CountUp end={item.value} />
					) : (
						<CountUp end={item.value / 100} formattingFn={formatPrice} />
					)}
				</h2>
			</CardContent>
		</Card>
	);
}
