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
import ImageUpload from '@/components/ui/ImageUpload';
import { Input } from '@/components/ui/Input';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/Select';
import { Textarea } from '@/components/ui/Textarea';

import { useCreateProduct } from '@/hooks/queries/product/useCreateProduct';
import { useDeleteProduct } from '@/hooks/queries/product/useDeleteProduct';
import { useUpdateProduct } from '@/hooks/queries/product/useUpdateProduct';

import {
	ICategory,
	IColor,
	IProduct,
	IProductCreateUpdate,
} from '@/shared/types';

import { convertPriceToUnit, parsePrice } from '@/utils/string/formatPrice';

interface ProductFormProps {
	product?: IProduct;
	categories: ICategory[];
	colors: IColor[];
}

export default function ProductForm({
	product,
	categories,
	colors,
}: ProductFormProps) {
	const { createProduct, isCreating } = useCreateProduct();
	const { updateProduct, isUpdating } = useUpdateProduct();
	const { deleteProduct, isDeleting } = useDeleteProduct();

	const title = product ? 'Edit product data' : 'Create product';
	const description = product
		? 'Update data about product in store'
		: 'Add new product to store';
	const action = product ? 'Save' : 'Create';

	const form = useForm<IProductCreateUpdate>({
		mode: 'onChange',
		values: {
			title: product?.title || '',
			description: product?.description || '',
			price: product?.price ? convertPriceToUnit(product.price) : 0,
			images: product?.images || [],
			categoryId: product?.category.id || '',
			colorId: product?.color.id || '',
		},
	});

	const onSubmit: SubmitHandler<IProductCreateUpdate> = data => {
		data.price = parsePrice(data.price);
		if (product) updateProduct(data);
		else createProduct(data);
	};

	return (
		<div className='p-6'>
			<div className='flex items-center justify-between'>
				<Heading title={title} description={description} />
				{product && (
					<ConfirmModal
						handleClick={deleteProduct}
						description='This action cannot be undone. This will permanently delete the product from our servers.'
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
					<FormField
						control={form.control}
						name='images'
						rules={{ required: 'Please upload at least one image' }}
						render={({ field }) => (
							<FormItem className='mt-4'>
								<FormLabel htmlFor='images'>Images</FormLabel>
								<FormControl>
									<ImageUpload
										isDisabled={isCreating || isUpdating}
										onChange={field.onChange}
										value={field.value}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
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
											placeholder='iPhone 17 Pro'
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
							name='price'
							rules={{ required: 'Please enter a price' }}
							render={({ field }) => (
								<FormItem>
									<FormLabel htmlFor='price'>Price</FormLabel>
									<FormControl>
										<Input
											id='price'
											type='number'
											step='0.01'
											placeholder='1199.99'
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
							name='categoryId'
							rules={{ required: 'Please select category' }}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Category</FormLabel>
									<Select
										disabled={isCreating || isUpdating}
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger className='w-full'>
												<SelectValue placeholder='Select category' />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectGroup>
												{categories.map(category => (
													<SelectItem key={category.id} value={category.id}>
														{category.title}
													</SelectItem>
												))}
											</SelectGroup>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className='mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
						<FormField
							control={form.control}
							name='colorId'
							rules={{ required: 'Please select color' }}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Color</FormLabel>
									<Select
										disabled={isCreating || isUpdating}
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger className='w-full'>
												<SelectValue placeholder='Select color' />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectGroup>
												{colors.map(color => (
													<SelectItem key={color.id} value={color.id}>
														{color.name}
													</SelectItem>
												))}
											</SelectGroup>
										</SelectContent>
									</Select>
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
										className='max-h-100 min-h-25'
										id='description'
										placeholder='Discover the next generation of innovation with the Apple iPhone 17 Pro — a smartphone that combines unmatched power, premium design, and professional-grade photography. Engineered for those who expect more from their device...'
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
