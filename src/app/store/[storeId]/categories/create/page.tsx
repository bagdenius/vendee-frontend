import type { Metadata } from 'next';

import CreateCategory from './CreateCategory';
import { NO_INDEX_PAGE } from '@/constants';

export const metadata: Metadata = {
	title: 'Create category',
	...NO_INDEX_PAGE,
};

export default function CreatecategoryPage() {
	return <CreateCategory />;
}
