'use client';

import { Trash } from 'lucide-react';
import { SubmitHandler, useForm } from 'react-hook-form';

import ConfirmModal from '@/components/modals/ConfirmModal';
import { Button } from '@/components/ui/Button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/Form';
import Heading from '@/components/ui/Heading';
import { Input } from '@/components/ui/Input';

import { useCreateColor } from '@/hooks/queries/color/useCreateColor';
import { useDeleteColor } from '@/hooks/queries/color/useDeleteColor';
import { useUpdateColor } from '@/hooks/queries/color/useUpdateColor';

import { IColor, IColorCreateUpdate } from '@/shared/types';

interface ColorFormProps {
	color?: IColor;
}

export default function ColorForm({ color }: ColorFormProps) {
	const { createColor, isCreating } = useCreateColor();
	const { updateColor, isUpdating } = useUpdateColor();
	const { deleteColor, isDeleting } = useDeleteColor();

	const title = color ? 'Edit color data' : 'Create color';
	const description = color
		? 'Update data about color in store'
		: 'Add new color to store';
	const action = color ? 'Save' : 'Create';

	const form = useForm<IColorCreateUpdate>({
		mode: 'onChange',
		values: {
			name: color?.name || '',
			value: color?.value || '',
		},
	});

	const onSubmit: SubmitHandler<IColorCreateUpdate> = data => {
		if (color) updateColor(data);
		else createColor(data);
	};

	return (
		<div className='p-6'>
			<div className='flex items-center justify-between'>
				<Heading title={title} description={description} />
				{color && (
					<ConfirmModal
						handleClick={deleteColor}
						description='This action cannot be undone. This will permanently delete the color from our servers.'
					>
						<Button size='icon' disabled={isDeleting}>
							<Trash className='size-4' />
						</Button>
					</ConfirmModal>
				)}
			</div>
			<Form {...form}>
				<form
					className='mt-6 h-full space-y-6'
					onSubmit={form.handleSubmit(onSubmit)}
				>
					<div className='mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
						<FormField
							control={form.control}
							name='name'
							rules={{ required: 'Please enter a name' }}
							render={({ field }) => (
								<FormItem>
									<FormLabel htmlFor='name'>Name</FormLabel>
									<FormControl>
										<Input
											id='name'
											placeholder='Cosmic Orange'
											disabled={isCreating || isUpdating}
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='value'
							rules={{ required: 'Please enter a value' }}
							render={({ field }) => (
								<FormItem>
									<FormLabel htmlFor='value'>Value</FormLabel>
									<FormControl>
										<Input
											id='value'
											placeholder='#F77E2D'
											disabled={isCreating || isUpdating}
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<Button disabled={isCreating || isUpdating}>{action}</Button>
				</form>
			</Form>
		</div>
	);
}
