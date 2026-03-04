import { PropsWithChildren } from 'react';

import MainLayout from '@/components/layouts/main/MainLayout';

export default function HomeLayout({ children }: PropsWithChildren) {
	return <MainLayout>{children}</MainLayout>;
}
