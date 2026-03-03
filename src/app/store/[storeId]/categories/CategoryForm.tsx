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

import { useCreateCategory } from '@/hooks/queries/category/useCreateCategory';
import { useDeleteCategory } from '@/hooks/queries/category/useDeleteCategory';
import { useUpdateCategory } from '@/hooks/queries/category/useUpdateCategory';

import { ICategory, ICategoryCreateUpdate } from '@/shared/types';

interface CategoryFormProps {
	category?: ICategory;
}

export default function CategoryForm({ category }: CategoryFormProps) {
	const { createCategory, isCreating } = useCreateCategory();
	const { updateCategory, isUpdating } = useUpdateCategory();
	const { deleteCategory, isDeleting } = useDeleteCategory();

	const title = category ? 'Edit category data' : 'Create category';
	const description = category
		? 'Update data about category in store'
		: 'Add new category to store';
	const action = category ? 'Save' : 'Create';

	const form = useForm<ICategoryCreateUpdate>({
		mode: 'onChange',
		values: category || { title: '', description: '' },
	});

	const onSubmit: SubmitHandler<ICategoryCreateUpdate> = data => {
		if (category) updateCategory(data);
		else createCategory(data);
	};

	return (
		<div className='p-6'>
			<div className='flex items-center justify-between'>
				<Heading title={title} description={description} />
				{category && (
					<ConfirmModal
						handleClick={deleteCategory}
						description='This action cannot be undone. This will permanently delete the category from our servers.'
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
							name='title'
							rules={{ required: 'Please enter a title' }}
							render={({ field }) => (
								<FormItem>
									<FormLabel htmlFor='title'>Title</FormLabel>
									<FormControl>
										<Input
											id='title'
											placeholder='Phones'
											disabled={isCreating || isUpdating}
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
						rules={{ required: 'Please enter a description' }}
						render={({ field }) => (
							<FormItem>
								<FormLabel htmlFor='description'>Description</FormLabel>
								<FormControl>
									<Textarea
										id='description'
										placeholder='Stay connected, entertained, and productive with our wide range of smartphones and mobile devices. Explore the latest models from top brands, featuring cutting-edge cameras, powerful processors, and sleek designs that fit your lifestyle. Whether you’re looking for a budget-friendly phone, a flagship device, or accessories to enhance your mobile experience, our marketplace offers everything you need to stay connected in style. Find the perfect phone for work, gaming, photography, or everyday communication – all in one place.'
										disabled={isCreating || isUpdating}
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button disabled={isCreating || isUpdating}>{action}</Button>
				</form>
			</Form>
		</div>
	);
}
