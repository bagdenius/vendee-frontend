'use client';

import { ChevronsUpDown, Plus, StoreIcon } from 'lucide-react';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

import CreateStoreModal from '@/components/modals/CreateStoreModal';
import { Button } from '@/components/ui/Button';
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
} from '@/components/ui/Command';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/Popover';

import { IStore } from '@/shared/types';

interface StoreSwitcherProps {
	items: IStore[];
}

export default function StoreSwitcher({ items }: StoreSwitcherProps) {
	const [isOpen, setIsOpen] = useState(false);
	const params = useParams<{ storeId: string }>();
	const router = useRouter();
	const pathname = usePathname();

	const onStoreSelect = (storeId: string) => {
		setIsOpen(false);
		const newPath = pathname.replace(params.storeId, storeId);
		router.push(newPath);
	};

	return (
		<Popover open={isOpen} onOpenChange={setIsOpen}>
			<PopoverTrigger asChild>
				<Button
					className='w-52 leading-none'
					variant='outline'
					size='sm'
					role='combobox'
					aria-expanded={isOpen}
					aria-label='Select store'
				>
					<StoreIcon className='mr-1 size-4' />
					<span className='line-clamp-1'>
						{items.find(store => store.id === params.storeId)?.title ||
							'Select store'}
					</span>
					<ChevronsUpDown className='ml-auto size-4 shrink-0 opacity-50' />
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-52 p-0'>
				<Command>
					<CommandList>
						<CommandInput placeholder='Find store' />
						<CommandEmpty>Nothing found</CommandEmpty>
						<CommandGroup heading='Stores'>
							{items.map(store => (
								<CommandItem
									className='text-sm'
									key={store.id}
									value={store.id}
									onSelect={(storeId: string) => {
										onStoreSelect(storeId);
									}}
								>
									<StoreIcon className='mr-2 size-4' />
									<div className='line-clamp-1'>{store.title}</div>
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
					<CommandSeparator />
					<CommandList>
						<CommandGroup>
							<CreateStoreModal>
								<CommandItem>
									<Plus className='mr-2 size-4' />
									Create store
								</CommandItem>
							</CreateStoreModal>
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
