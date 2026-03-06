import { Button } from '@/components/ui/Button';

import { useActions } from '@/hooks/useActions';
import { useCart } from '@/hooks/useCart';

import { IProduct } from '@/shared/types';

interface AddToCartButtonProps {
	product: IProduct;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
	const { items } = useCart();
	const { addToCart, removeFromCart } = useActions();

	const currentElement = items.find(
		cartItem => cartItem.product.id === product.id,
	);

	return (
		<Button
			size='lg'
			className='w-full rounded-r-none'
			onClick={() =>
				currentElement
					? removeFromCart({ id: currentElement.id })
					: addToCart({ product, quantity: 1, price: product.price })
			}
		>
			{currentElement ? 'Remove from Cart' : 'Add to Cart'}
		</Button>
	);
}
