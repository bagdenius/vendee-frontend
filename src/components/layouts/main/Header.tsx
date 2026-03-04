import HeaderMenu from './HeaderMenu';
import Logo from './Logo';
import Search from './Search';

export default function Header() {
	return (
		<div className='flex h-full items-center gap-x-4 border-b bg-white px-5 py-2'>
			<Logo
				className='text-primary/80 hover:text-primary/70 transition-colors'
				width={150}
				height={50}
			/>
			<Search />
			<HeaderMenu />
		</div>
	);
}
