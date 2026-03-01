import { Card, CardContent } from '../ui/Card';
import Loader from '../ui/Loader';
import { Skeleton } from '../ui/Skeleton';

export default function DataTableLoading() {
	return (
		<div className='mx-auto w-full'>
			<Skeleton className='h-8 w-48'></Skeleton>
			<Skeleton className='mt-4 h-4 w-72'></Skeleton>
			<Card className='mt-6'>
				<CardContent className='flex h-130 w-full items-center justify-center'>
					<Loader />
				</CardContent>
			</Card>
		</div>
	);
}
