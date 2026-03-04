import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/Button';

import { PUBLIC_URL } from '@/shared/config';

import { SITE_DESCRIPTION } from '@/constants';

export default function Hero() {
	return (
		<div className='mx-auto my-24 flex max-w-4xl flex-col items-center space-y-6 py-20 text-center'>
			<h1 className='text-4xl font-bold tracking-tight md:text-5xl'>
				Discover, Buy and Sell
				<span className='text-muted-foreground block'>
					All in One Marketplace
				</span>
			</h1>
			<p className='text-muted-foreground text-lg'>{SITE_DESCRIPTION}</p>
			<Link href={PUBLIC_URL.products()}>
				<Button>
					Start Shopping <ArrowRight />
				</Button>
			</Link>
		</div>
	);
}
