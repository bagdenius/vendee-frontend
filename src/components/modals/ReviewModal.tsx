'use client';

import { PropsWithChildren, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Rating } from 'react-simple-star-rating';

import { useCreateReview } from '@/hooks/queries/reviews/useCreateReview';

import { IReviewCreateUpdate } from '@/shared/types';

import { Button } from '../ui/Button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '../ui/Dialog';
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/Form';
import { Textarea } from '../ui/Textarea';

interface ReviewModalProps {
	storeId: string;
}

export default function ReviewModal({
	children,
	storeId,
}: PropsWithChildren<ReviewModalProps>) {
	const [isOpen, setIsOpen] = useState(false);
	const form = useForm<IReviewCreateUpdate>({ mode: 'onChange' });
	const { createReview, isCreating } = useCreateReview(storeId);
	const onSubmit: SubmitHandler<IReviewCreateUpdate> = data => {
		form.reset();
		createReview(data);
		setIsOpen(false);
	};

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Review creation</DialogTitle>
					<DialogDescription>
						Add rating and review text to leave a review to a product
					</DialogDescription>
				</DialogHeader>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
						<FormField
							control={form.control}
							name='rating'
							rules={{ required: 'Please define a product review rating' }}
							render={({ field }) => (
								<FormItem>
									<FormLabel htmlFor='rating'>Rating</FormLabel>
									<FormControl>
										<Rating
											onClick={field.onChange}
											initialValue={field.value}
											SVGstyle={{ display: 'inline-block' }}
											size={20}
											transition
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='text'
							rules={{ required: 'Please enter a product review text' }}
							render={({ field }) => (
								<FormItem>
									<FormLabel htmlFor='text'>Text</FormLabel>
									<FormControl>
										<Textarea
											{...field}
											name='text'
											placeholder='Review text'
											disabled={isCreating}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<div className='flex justify-end'>
							<Button disabled={isCreating}>Add review</Button>
						</div>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
}
