import Image from 'next/image';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

import { ILastUsers } from '@/shared/types';

import { formatPrice } from '@/utils/string/formatPrice';

interface LastUsersProps {
	data: ILastUsers[];
}

export default function LastUsers({ data }: LastUsersProps) {
	return (
		<Card className='border-none drop-shadow-sm'>
			<CardHeader className='flex flex-col items-stretch border-b'>
				<CardTitle className='line-clamp-1 text-xl font-medium tracking-tight'>
					Last customers
				</CardTitle>
			</CardHeader>
			<CardContent>
				{data.length ? (
					data.map(user => (
						<div key={user.id} className='flex items-center'>
							<Image
								className='rounded-full'
								src={user.avatar}
								alt={`Image of customer ${user.name}`}
								width={40}
								height={40}
							/>
							<div className='text-muted-foreground ml-4 space-y-1 text-sm'>
								<p className='text-primary leading-none font-medium'>
									{user.name}
								</p>
								<p>{user.email}</p>
							</div>
							<div className='ml-auto font-medium'>
								+{formatPrice(user.total)}
							</div>
						</div>
					))
				) : (
					<div>No customers data :(</div>
				)}
			</CardContent>
		</Card>
	);
}
