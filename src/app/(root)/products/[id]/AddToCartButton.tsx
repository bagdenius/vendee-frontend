import { Button } from '@/components/ui/Button';

import { IProduct } from '@/shared/types';

interface AddToCartButtonProps {
	product: IProduct;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
	return (
		<Button size='lg' className='w-full rounded-r-none'>
			Add to Cart
		</Button>
	);
}
