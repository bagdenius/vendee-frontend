import Link from 'next/link';

import Icon from '@/components/ui/Icon';

import { PUBLIC_URL } from '@/shared/config';

import { cn } from '@/utils/clsx';

import logo from '@/assets/logo.svg';

interface LogoProps {
	className?: string;
	width?: number;
	height?: number;
}

export default function Logo({
	className,
	width = 256,
	height = 64,
}: LogoProps) {
	return (
		<Link
			href={PUBLIC_URL.home()}
			className={cn('flex items-center gap-x-3', className)}
		>
			<Icon src={logo} width={width} height={height} className='text-inherit' />
		</Link>
	);
}
