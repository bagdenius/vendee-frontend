'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { type PropsWithChildren, useState } from 'react';
import { Toaster } from 'sonner';

export function Providers({ children }: PropsWithChildren) {
	const [client] = useState(
		new QueryClient({
			defaultOptions: { queries: { refetchOnWindowFocus: false } },
		}),
	);

	return (
		<QueryClientProvider client={client}>
			<Toaster position='top-center' />
			{children}
		</QueryClientProvider>
	);
}
