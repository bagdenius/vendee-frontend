'use client';

import { Plus } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

import { DataTable } from '@/components/data-table/DataTable';
import DataTableLoading from '@/components/data-table/DataTableLoading';
import { Button } from '@/components/ui/Button';
import Heading from '@/components/ui/Heading';

import { useColors } from '@/hooks/queries/color/useColors';

import { STORE_URL } from '@/shared/config';
import { IColor } from '@/shared/types';

import { formatDate } from '@/utils/date/formatDate';

import { colorColumns } from './ColorColumns';

export default function Colors() {
	const { storeId } = useParams<{ storeId: string }>();
	const { colors, isPending } = useColors();
	console.log(colors);

	const formattedColors: IColor[] = colors
		? colors.map(color => ({
				id: color.id,
				name: color.name,
				value: color.value,
				storeId: color.storeId,
				createdAt: formatDate(color.createdAt),
			}))
		: [];

	return (
		<div className='p-6'>
			{isPending ? (
				<DataTableLoading />
			) : (
				<>
					<div className='flex items-center justify-between'>
						<Heading
							title={`Colors (${colors?.length || '0'})`}
							description='All colors from your store'
						/>
						<div className='flex items-center gap-x-4'>
							<Link href={STORE_URL.colorCreate(storeId)}>
								<Button>
									<Plus className='size-4' /> Create
								</Button>
							</Link>
						</div>
					</div>
					<div className='mt-3'>
						<DataTable
							columns={colorColumns}
							data={formattedColors}
							filterKey='name'
						/>
					</div>
				</>
			)}
		</div>
	);
}
