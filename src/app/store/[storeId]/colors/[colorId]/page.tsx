import type { Metadata } from 'next';

import EditColor from './EditColor';
import { NO_INDEX_PAGE } from '@/constants';

export const metadata: Metadata = { title: 'Edit color', ...NO_INDEX_PAGE };

export default function EditColorPage() {
	return <EditColor />;
}
