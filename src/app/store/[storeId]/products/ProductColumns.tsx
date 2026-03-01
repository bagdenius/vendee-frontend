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

export interface IProductColumn {
	id: string;
	title: string;
	price: string;
	category: string;
	color: string;
	storeId: string;
}

export const productColumns: ColumnDef<IProductColumn>[] = [
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
		accessorKey: 'price',
		header: ({ column }) => (
			<Button
				variant='ghost'
				onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
			>
				Price <ArrowUpDown className='ml-2 size-4' />
			</Button>
		),
	},
	{
		accessorKey: 'category',
		header: ({ column }) => (
			<Button
				variant='ghost'
				onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
			>
				Category <ArrowUpDown className='ml-2 size-4' />
			</Button>
		),
	},
	{
		accessorKey: 'color',
		header: ({ column }) => (
			<Button
				variant='ghost'
				onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
			>
				Color <ArrowUpDown className='ml-2 size-4' />
			</Button>
		),
		cell: ({ row }) => (
			<div className='flex items-center gap-x-3'>
				{row.original.color}
				<div
					className='size-4 rounded-full border'
					style={{ backgroundColor: row.original.color }}
				></div>
			</div>
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
					<Link href={PUBLIC_URL.product(row.original.id)} target='_blank'>
						<DropdownMenuItem className='cursor-pointer'>
							<ExternalLink className='mr-2 size-4' />
							Open page
						</DropdownMenuItem>
					</Link>
					<Link
						href={STORE_URL.productUpdate(
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
