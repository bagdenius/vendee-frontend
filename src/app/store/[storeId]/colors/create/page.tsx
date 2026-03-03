import type { Metadata } from 'next';

import Createcolor from './CreateColor';
import { NO_INDEX_PAGE } from '@/constants';

export const metadata: Metadata = { title: 'Create color', ...NO_INDEX_PAGE };

export default function CreatecolorPage() {
	return <Createcolor />;
}
