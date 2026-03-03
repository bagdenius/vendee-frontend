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
import { IColor } from '@/shared/types';

export const colorColumns: ColumnDef<IColor>[] = [
	{
		accessorKey: 'name',
		header: ({ column }) => (
			<Button
				variant='ghost'
				onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
			>
				Name <ArrowUpDown className='ml-2 size-4' />
			</Button>
		),
	},
	{
		accessorKey: 'value',
		header: ({ column }) => (
			<Button
				variant='ghost'
				onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
			>
				Value <ArrowUpDown className='ml-2 size-4' />
			</Button>
		),
		cell: ({ row }) => (
			<div className='flex items-center gap-x-3'>
				{row.original.value}
				<div
					className='size-4 rounded-full border'
					style={{ backgroundColor: row.original.value }}
				></div>
			</div>
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
					<Link
						href={STORE_URL.colorUpdate(row.original.storeId, row.original.id)}
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
