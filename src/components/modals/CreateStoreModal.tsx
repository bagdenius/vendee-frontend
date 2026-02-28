import React, { PropsWithChildren, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useCreateStore } from '@/hooks/queries/store/useCreateStore';

import { IStoreCreate } from '@/shared/types';

import { Button } from '../ui/Button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '../ui/Dialog';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '../ui/Form';
import { Input } from '../ui/Input';

export default function CreateStoreModal({ children }: PropsWithChildren) {
	const [isOpen, setIsOpen] = useState(false);
	const { createStore, isCreating } = useCreateStore();

	const form = useForm<IStoreCreate>({
		defaultValues: { title: '' },
		mode: 'onChange',
	});

	const onSubmit: SubmitHandler<IStoreCreate> = data => {
		createStore(data);
		setIsOpen(false);
	};

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogTrigger className='w-full'>{children}</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Create store</DialogTitle>
					<DialogDescription>
						Enter title in the field below to create store{' '}
					</DialogDescription>
				</DialogHeader>
				<Form {...form}>
					<form className='space-y-4' onSubmit={form.handleSubmit(onSubmit)}>
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
											disabled={isCreating}
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className='flex justify-end'>
							<Button variant='primary' disabled={isCreating}>
								Create
							</Button>
						</div>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
}
