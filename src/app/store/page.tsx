import type { Metadata } from 'next';

import Store from './Store';

export const metadata: Metadata = { title: 'Store management' };

export default function StorePage() {
	return <Store />;
}
