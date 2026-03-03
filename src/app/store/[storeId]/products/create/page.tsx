import type { Metadata } from 'next';

import CreateProduct from './CreateProduct';
import { NO_INDEX_PAGE } from '@/constants';

export const metadata: Metadata = { title: 'Create Product', ...NO_INDEX_PAGE };

export default function CreateProductPage() {
	return <CreateProduct />;
}
