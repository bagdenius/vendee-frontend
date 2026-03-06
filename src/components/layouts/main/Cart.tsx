import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/Button';
import Heading from '@/components/ui/Heading';
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/Sheet';

import { useCart } from '@/hooks/useCart';
import { useCheckout } from '@/hooks/useCheckout';
import { useProfile } from '@/hooks/useProfile';

import { PUBLIC_URL } from '@/shared/config';

import { formatPrice } from '@/utils/string/formatPrice';

import CartItem from './CartItem';

export default function Cart() {
	const { items, total } = useCart();
	const router = useRouter();
	const { createOrder, isCreating } = useCheckout();
	const { user } = useProfile();

	const handleClick = () =>
		user ? createOrder() : router.push(PUBLIC_URL.auth());

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant='ghost'>Cart</Button>
			</SheetTrigger>
			<SheetContent className='p-6'>
				<SheetTitle>
					<Heading title='Product cart' className='text-xl' />
				</SheetTitle>
				<div className='flex w-full flex-1 flex-col'>
					{items.length ? (
						items.map(item => <CartItem key={item.id} item={item} />)
					) : (
						<div className='text-muted-foreground text-sm'>Cart is empty</div>
					)}
				</div>
				{items.length && (
					<>
						<div className='text-lg font-medium'>
							Total order price: {formatPrice(total)}
						</div>
						<Button
							className='w-full'
							onClick={handleClick}
							disabled={isCreating}
						>
							Go to payment
						</Button>
					</>
				)}
			</SheetContent>
		</Sheet>
	);
}
