import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';

import { Button } from '@/components/ui/Button';

export interface IReviewColumn {
	id: string;
	product: string;
	rating: string;
	text: string;
	username: string;
	createdAt: string;
}

export const reviewColumns: ColumnDef<IReviewColumn>[] = [
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
		accessorKey: 'product',
		header: ({ column }) => (
			<Button
				variant='ghost'
				onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
			>
				Product <ArrowUpDown className='ml-2 size-4' />
			</Button>
		),
	},
	{
		accessorKey: 'rating',
		header: ({ column }) => (
			<Button
				variant='ghost'
				onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
			>
				Rating <ArrowUpDown className='ml-2 size-4' />
			</Button>
		),
	},
	{
		accessorKey: 'text',
		header: ({ column }) => (
			<Button
				variant='ghost'
				onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
			>
				Text <ArrowUpDown className='ml-2 size-4' />
			</Button>
		),
	},
	{
		accessorKey: 'username',
		header: ({ column }) => (
			<Button
				variant='ghost'
				onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
			>
				Customer <ArrowUpDown className='ml-2 size-4' />
			</Button>
		),
	},
];
