'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import { saveTokenToStorage } from '@/services';

export default function Dashboard() {
	const searchParams = useSearchParams();

	useEffect(() => {
		const accessToken = searchParams.get('accessToken');
		if (accessToken) saveTokenToStorage(accessToken);
	}, [searchParams]);

	return <div>Dashboard</div>;
}
