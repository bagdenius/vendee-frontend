'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/utils/clsx';

import { IMenuItem } from './menu.interface';

interface MenuItemProps {
	route: IMenuItem;
}

export default function MenuItem({ route }: MenuItemProps) {
	const pathname = usePathname();

	return (
		<Link
			href={route.link}
			className={cn(
				`${'hover:bg-primary/15 hover:text-primary text-primary/70 flex items-center gap-x-3 rounded-lg bg-transparent px-3 py-2 text-sm font-medium transition-all duration-200 hover:drop-shadow-sm'} ${pathname === route.link && 'text-primary hover:text-primary hover:bg-primary/15 bg-primary/10 text-sm'}`,
			)}
		>
			<route.icon className='size-5' />
			{route.value}
		</Link>
	);
}
