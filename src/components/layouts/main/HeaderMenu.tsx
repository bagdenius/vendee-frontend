'use client';

import { LogIn } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import CreateStoreModal from '@/components/modals/CreateStoreModal';
import { Button } from '@/components/ui/Button';
import Loader from '@/components/ui/Loader';

import { useProfile } from '@/hooks/useProfile';

import { DASHBOARD_URL, PUBLIC_URL, STORE_URL } from '@/shared/config';

import Cart from './Cart';

export default function HeaderMenu() {
	const { user, isLoading } = useProfile();

	return (
		<div className='ml-auto hidden items-center gap-x-2 lg:flex'>
			<Cart />
			<Link href={PUBLIC_URL.products()}>
				<Button variant='ghost'>Catalog</Button>
			</Link>
			{isLoading ? (
				<Loader />
			) : user ? (
				<>
					<Link href={DASHBOARD_URL.favorites()}>
						<Button variant='ghost'>Favorites</Button>
					</Link>
					{user.stores.length ? (
						<Link href={STORE_URL.home(user.stores[0].id)}>
							<Button variant='ghost'>My Stores</Button>
						</Link>
					) : (
						<CreateStoreModal>
							<Button variant='ghost'>Create Store</Button>
						</CreateStoreModal>
					)}
					<Link href={DASHBOARD_URL.home()}>
						<Image
							className='rounded-full'
							src={user.avatar}
							alt={`Avatar of user ${user.name}`}
							width={42}
							height={42}
						/>
					</Link>
				</>
			) : (
				<Link href={PUBLIC_URL.auth()}>
					<Button>
						<LogIn className='size-4' /> Sign in
					</Button>
				</Link>
			)}
		</div>
	);
}
