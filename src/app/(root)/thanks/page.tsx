import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

import { Button } from '@/components/ui/Button';

import { PUBLIC_URL } from '@/shared/config';

import { NO_INDEX_PAGE } from '@/constants';

export const metadata: Metadata = {
	title: 'Thank you for your order',
	...NO_INDEX_PAGE,
};

export default function ThanksPage() {
	return (
		<div className='mx-auto my-24 flex max-w-4xl flex-col items-center space-y-6 py-20 text-center'>
			<h1 className='text-4xl font-bold tracking-tight md:text-5xl'>
				Thank you for your order
			</h1>
			<p className='text-muted-foreground text-lg'>
				Your payment was successfully processed and your order is now confirmed.
				We’ve sent a confirmation email with all the details. Our team is
				preparing your order for shipment. You’ll receive another notification
				once your package is on the way.
			</p>
			<Link href={PUBLIC_URL.home()}>
				<Button>
					Go to Homepage <ArrowRight />
				</Button>
			</Link>
		</div>
	);
}
