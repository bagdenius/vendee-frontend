import Image from 'next/image';
import Link from 'next/link';

import { PUBLIC_URL } from '@/shared/config';
import { IProduct } from '@/shared/types';

import { formatPrice } from '@/utils/string/formatPrice';

interface ProductCardProps {
	product: IProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
	return (
		<div className='bg-background'>
			<Link href={PUBLIC_URL.product(product.id)}>
				<Image
					className='rounded-lg'
					src={product.images[0]}
					alt={`Product ${product.title} image`}
					width={300}
					height={300}
				/>
				<h3 className='mt-4 line-clamp-1 font-semibold'>{product.title}</h3>
			</Link>
			<Link
				className='text-muted-foreground mt-1 text-sm'
				href={PUBLIC_URL.category(product.category.id)}
			>
				{product.category.title}
			</Link>
			<p className='mt-1 text-sm font-medium'>{formatPrice(product.price)}</p>
		</div>
	);
}
