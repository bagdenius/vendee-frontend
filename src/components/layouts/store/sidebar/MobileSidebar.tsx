import { Menu } from 'lucide-react';

import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/Sheet';

import Sidebar from './Sidebar';

export default function MobileSidebar() {
	return (
		<Sheet>
			<SheetTrigger className='cursor-pointer pr-4 transition-opacity hover:opacity-75 lg:hidden'>
				<Menu />
			</SheetTrigger>
			<SheetContent side='left' className='bg-white p-0'>
				<SheetTitle hidden>Store Sidebar</SheetTitle>
				<Sidebar />
			</SheetContent>
		</Sheet>
	);
}
