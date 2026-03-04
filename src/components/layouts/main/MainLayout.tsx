import { PropsWithChildren } from 'react';

import Footer from './Footer';
import Header from './Header';

export default function MainLayout({ children }: PropsWithChildren) {
	return (
		<div className='flex h-full flex-col'>
			<div className='flex-1'>
				<Header />
				<main className='mx-5 lg:mx-14'>{children}</main>
				<Footer />
			</div>
		</div>
	);
}
