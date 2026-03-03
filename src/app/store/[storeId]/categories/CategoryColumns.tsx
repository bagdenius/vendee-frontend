import { ColumnDef } from '@tanstack/react-table';
import {
	ArrowUpDown,
	ExternalLink,
	MoreHorizontal,
	Pencil,
} from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/Button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';

import { PUBLIC_URL, STORE_URL } from '@/shared/config';
import { ICategory } from '@/shared/types';

export const categoryColumns: ColumnDef<ICategory>[] = [
	{
		accessorKey: 'title',
		header: ({ column }) => (
			<Button
				variant='ghost'
				onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
			>
				Title <ArrowUpDown className='ml-2 size-4' />
			</Button>
		),
	},
	{
		accessorKey: 'description',
		header: ({ column }) => (
			<Button
				variant='ghost'
				onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
			>
				Description <ArrowUpDown className='ml-2 size-4' />
			</Button>
		),
	},
	{
		accessorKey: 'createdAt',
		header: ({ column }) => (
			<Button
				variant='ghost'
				onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
			>
				Create date <ArrowUpDown className='ml-2 size-4' />
			</Button>
		),
	},
	{
		accessorKey: 'action',
		header: 'Actions',
		cell: ({ row }) => (
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant='ghost' className='size-8 p-0'>
						<MoreHorizontal className='size-4' />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align='end'>
					<DropdownMenuLabel>Actions</DropdownMenuLabel>
					<Link href={PUBLIC_URL.category(row.original.id)} target='_blank'>
						<DropdownMenuItem className='cursor-pointer'>
							<ExternalLink className='mr-2 size-4' />
							Category page
						</DropdownMenuItem>
					</Link>
					<Link
						href={STORE_URL.categoryUpdate(
							row.original.storeId,
							row.original.id,
						)}
					>
						<DropdownMenuItem className='cursor-pointer'>
							<Pencil className='mr-2 size-4' />
							Edit
						</DropdownMenuItem>
					</Link>
				</DropdownMenuContent>
			</DropdownMenu>
		),
	},
];
