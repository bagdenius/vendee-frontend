import { PropsWithChildren } from 'react';

import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';

export default function StoreLayout({ children }: PropsWithChildren) {
	return (
		<div className='flex w-full flex-col'>
			<div>
				<div className='fixed inset-y-0 z-50 hidden h-full w-64 lg:flex'>
					<Sidebar />
				</div>
				<div className='fixed inset-y-0 z-49 h-17 w-full lg:pl-64'>
					<Header />
				</div>
				<main className='bg-white py-17 lg:ml-64'>{children}</main>
			</div>
		</div>
	);
}
