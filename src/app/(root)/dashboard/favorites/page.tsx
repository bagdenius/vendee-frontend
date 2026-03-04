import type { Metadata } from 'next';

import Favorites from './Favorites';
import { NO_INDEX_PAGE } from '@/constants';

export const metadata: Metadata = {
	title: 'Favorite products',
	...NO_INDEX_PAGE,
};

export default function FavoritesPage() {
	return <Favorites />;
}
