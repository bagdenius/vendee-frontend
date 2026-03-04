'use client';

import { useMutation } from '@tanstack/react-query';
import { LogOut } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import { DataTable } from '@/components/data-table/DataTable';
import { Button } from '@/components/ui/Button';

import { useProfile } from '@/hooks/useProfile';

import { PUBLIC_URL } from '@/shared/config';

import { formatDate } from '@/utils/date/formatDate';
import { formatPrice } from '@/utils/string/formatPrice';

import { IOrderColumn, orderColumns } from './favorites/OrderColumns';
import { authService, saveTokenToStorage } from '@/services';

export default function Dashboard() {
	const searchParams = useSearchParams();
	const router = useRouter();
	const { user, isLoading } = useProfile();

	useEffect(() => {
		const accessToken = searchParams.get('accessToken');
		if (accessToken) saveTokenToStorage(accessToken);
	}, [searchParams]);

	const { mutate: logout } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess: () => router.push(PUBLIC_URL.auth()),
	});

	if (!user) return null;

	const formattedOrders: IOrderColumn[] = user.orders.map(order => ({
		createdAt: formatDate(order.createdAt),
		status: order.status === 'PENDING' ? 'Waiting for payment' : 'Paid',
		total: formatPrice(order.total),
	}));

	return (
		<div className='p-6'>
			<div className='mb-4 flex items-center justify-between'>
				<h1 className='text-2xl font-bold'>Your Orders</h1>
				<Button variant='ghost' onClick={() => logout()}>
					<LogOut />
					Log out
				</Button>
			</div>
			<DataTable data={formattedOrders} columns={orderColumns} />
		</div>
	);
}
