'use client';

import { Minus, Plus } from 'lucide-react';

import { Button } from '@/components/ui/Button';

import { useActions } from '@/hooks/useActions';
import { useCart } from '@/hooks/useCart';

import { ICartItem } from '@/shared/types';

interface CartActionsProps {
	item: ICartItem;
}

export default function CartActions({ item }: CartActionsProps) {
	const { changeQuantity } = useActions();
	const { items } = useCart();
	const quantity = items.find(cartItem => cartItem.id === item.id)?.quantity;

	return (
		<div className='mt-1 flex items-center'>
			<Button
				className='size-7'
				variant='ghost'
				size='icon'
				disabled={quantity === 1}
				onClick={() => changeQuantity({ id: item.id, type: 'minus' })}
			>
				<Minus className='size-4' />
			</Button>
			<input
				className='w-10 text-center text-sm'
				disabled
				readOnly
				value={quantity}
			/>
			<Button
				className='size-7'
				variant='ghost'
				size='icon'
				onClick={() => changeQuantity({ id: item.id, type: 'plus' })}
			>
				<Plus className='size-4' />
			</Button>
		</div>
	);
}
