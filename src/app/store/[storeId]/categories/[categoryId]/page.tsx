import type { Metadata } from 'next';

import EditCategory from './EditCategory';
import { NO_INDEX_PAGE } from '@/constants';

export const metadata: Metadata = { title: 'Edit category', ...NO_INDEX_PAGE };

export default function EditCategoryPage() {
	return <EditCategory />;
}
