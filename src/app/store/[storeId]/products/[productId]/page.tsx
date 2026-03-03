import type { Metadata } from 'next';

import EditProduct from './EditProduct';
import { NO_INDEX_PAGE } from '@/constants';

export const metadata: Metadata = { title: 'Edit product', ...NO_INDEX_PAGE };

export default function EditProductPage() {
	return <EditProduct />;
}
