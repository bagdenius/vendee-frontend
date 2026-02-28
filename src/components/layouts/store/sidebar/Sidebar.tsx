import Logo from '../../main/Logo';

import Navigation from './Navigation';

export default function Sidebar() {
	return (
		<div className='flex h-full flex-col overscroll-y-auto border-r bg-neutral-50 px-5 pt-4'>
			<Logo className='text-primary/80 hover:text-primary/70 transition-colors' />
			<Navigation />
		</div>
	);
}
