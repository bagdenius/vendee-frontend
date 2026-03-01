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
import { Textarea } from '@/components/ui/Textarea';

import { useDeleteStore } from '@/hooks/queries/store/useDeleteStore';
import { useUpdateStore } from '@/hooks/queries/store/useUpdateStore';

import { IStoreUpdate } from '@/shared/types';

export default function Settings() {
	const { store, updateStore, isUpdating } = useUpdateStore();
	const { deleteStore, isDeleting } = useDeleteStore();
	const form = useForm<IStoreUpdate>({
		values: {
			title: store?.title || '',
			description: store?.description || '',
		},
		mode: 'onChange',
	});

	const onSubmit: SubmitHandler<IStoreUpdate> = data => updateStore(data);

	return (
		<div className='p-6'>
			<div className='flex items-center justify-between'>
				<Heading title='Settings' description='Manage store settings' />
				<ConfirmModal
					handleClick={deleteStore}
					description='This action cannot be undone. This will permanently delete the store from our servers.'
				>
					<Button size='icon' disabled={isDeleting}>
						<Trash className='size-4' />
					</Button>
				</ConfirmModal>
			</div>
			<Form {...form}>
				<form
					className='h-full space-y-6'
					onSubmit={form.handleSubmit(onSubmit)}
				>
					<div className='mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
						<FormField
							control={form.control}
							name='title'
							rules={{ required: 'Please enter store title' }}
							render={({ field }) => (
								<FormItem>
									<FormLabel htmlFor='title'>Title</FormLabel>
									<FormControl>
										<Input
											id='title'
											placeholder='Acme'
											disabled={isUpdating}
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<FormField
						control={form.control}
						name='description'
						render={({ field }) => (
							<FormItem>
								<FormLabel htmlFor='description'>Description</FormLabel>
								<FormControl>
									<Textarea
										className='max-h-100 min-h-25'
										id='description'
										placeholder='Store description...'
										disabled={isUpdating}
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type='submit' disabled={isUpdating}>
						Save
					</Button>
				</form>
			</Form>
		</div>
	);
}
