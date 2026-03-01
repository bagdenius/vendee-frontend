import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import {
	type ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from '@/components/ui/Chart';

import { IMonthlySales } from '@/shared/types';

import { formatPrice } from '@/utils/string/formatPrice';

const chartConfig = {
	value: {
		label: 'Revenue',
		color: '#3b82f6',
	},
} satisfies ChartConfig;

interface OverviewProps {
	data: IMonthlySales[];
}

export default function Overview({ data }: OverviewProps) {
	return (
		<Card className='border-none drop-shadow-sm'>
			<CardHeader className='flex flex-col items-stretch border-b'>
				<CardTitle className='line-clamp-1 text-xl font-medium tracking-tight'>
					Revenue
				</CardTitle>
			</CardHeader>
			<CardContent>
				<ChartContainer
					className='aspect-auto h-77 w-full'
					config={chartConfig}
				>
					<AreaChart
						accessibilityLayer
						data={data}
						margin={{
							left: 12,
							right: 12,
						}}
					>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey='date'
							tickLine={false}
							axisLine={false}
							tickMargin={8}
						/>
						<ChartTooltip
							content={
								<ChartTooltipContent label={formatPrice} indicator='dot' />
							}
						/>
						<Area
							dataKey='value'
							type='natural'
							fill='var(--color-value)'
							stroke='var(--color-value)'
						/>
					</AreaChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
