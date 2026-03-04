'use client';

import { SearchIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

import { PUBLIC_URL } from '@/shared/config';

export default function Search() {
	const [searchTerm, setSearchTerm] = useState<string>('');
	const router = useRouter();

	return (
		<div className='ml-auto hidden w-[40%] lg:block'>
			<div className='relative flex items-center'>
				<Input
					className='rounded-lg rounded-r-none pr-8'
					placeholder='Search for products'
					value={searchTerm}
					onChange={event => setSearchTerm(event.target.value)}
				/>
				<Button
					className='rounded-l-none'
					onClick={() =>
						router.push(PUBLIC_URL.products(`?searchTerm=${searchTerm}`))
					}
				>
					<SearchIcon className='size-4' />
				</Button>
			</div>
		</div>
	);
}
