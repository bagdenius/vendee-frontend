import type { Metadata } from 'next';
import { Suspense } from 'react';

import Dashboard from './Dashboard';
import { NO_INDEX_PAGE } from '@/constants';

export const metadata: Metadata = { title: 'Dashboard', ...NO_INDEX_PAGE };

export default function DashboardPage() {
	return (
		<Suspense>
			<Dashboard />;
		</Suspense>
	);
}
