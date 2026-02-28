'use client';
import Image from 'next/image';
import Link from 'next/link';

import Loader from '@/components/ui/Loader';

import { useProfile } from '@/hooks/useProfile';

import { DASHBOARD_URL } from '@/shared/config';

import MobileSidebar from '../sidebar/MobileSidebar';

import StoreSwitcher from './StoreSwitcher';

export default function Header() {
	const { user, isLoading } = useProfile();

	return (
		<div className='flex h-full items-center gap-x-4 border-b bg-white p-6'>
			<MobileSidebar />
			<div className='ml-auto flex items-center gap-x-4'>
				{isLoading ? (
					<Loader size='default' />
				) : (
					user && (
						<>
							<StoreSwitcher items={user.stores} />
							<Link href={DASHBOARD_URL.home()}>
								<Image
									className='rounded-full'
									src={user.avatar}
									alt={`${user.name} avatar image`}
									width={42}
									height={42}
								/>
							</Link>
						</>
					)
				)}
			</div>
		</div>
	);
}
