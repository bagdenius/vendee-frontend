'use client';

import Catalog from '@/components/ui/Catalog';

import { useProfile } from '@/hooks/useProfile';

export default function Favorites() {
	const { user, isLoading } = useProfile();

	if (!user) return null;

	return (
		<div className='my-6'>
			<Catalog title='Favorite products' products={user.favorites} />
		</div>
	);
}
