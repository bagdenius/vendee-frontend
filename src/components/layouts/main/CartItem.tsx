import Image from 'next/image';
import Link from 'next/link';

import { PUBLIC_URL } from '@/shared/config';
import { ICartItem } from '@/shared/types';

import { formatPrice } from '@/utils/string/formatPrice';

import CartActions from './CartActions';

interface CartItemProps {
	item: ICartItem;
}

export default function CartItem({ item }: CartItemProps) {
	return (
		<div className='mb-5 flex items-center'>
			<Link
				className='relative size-28 overflow-hidden rounded-md'
				href={PUBLIC_URL.product(item.product.id)}
			>
				<Image
					className='object-cover'
					src={item.product.images[0]}
					alt={`Image of product ${item.product.title}`}
					fill
				/>
			</Link>
			<div className='ml-4'>
				<h2 className='line-clamp-1 font-medium'>{item.product.title}</h2>
				<p className='text-muted-foreground mt-1 text-sm'>
					{formatPrice(item.product.price)}
				</p>
				<CartActions item={item} />
			</div>
		</div>
	);
}
