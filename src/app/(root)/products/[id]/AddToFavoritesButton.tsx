'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

import { Button } from '@/components/ui/Button';

import { useProfile } from '@/hooks/useProfile';

import { IProduct } from '@/shared/types';

import { userService } from '@/services';

interface AddToFavoritesButtonProps {
	product: IProduct;
}

export default function AddToFavoritesButton({
	product,
}: AddToFavoritesButtonProps) {
	const { user } = useProfile();
	const queryClient = useQueryClient();

	const { mutate: toggleFavorite, isPending } = useMutation({
		mutationKey: ['favorite', product.id, 'toggle'],
		mutationFn: () => userService.toggleFavorite(product.id),
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ['profile'] }),
	});

	if (!user) return null;

	const isExists = user.favorites.some(favorite => favorite.id === product.id);

	return (
		<Button
			className='rounded-l-none'
			variant='secondary'
			size='icon-lg'
			onClick={() => toggleFavorite()}
			disabled={isPending}
		>
			{isExists ? (
				<AiFillHeart color='#F43F5E' className='size-6' />
			) : (
				<AiOutlineHeart color='#F43F5E' className='size-6' />
			)}
		</Button>
	);
}
