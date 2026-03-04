import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { IProduct } from '@/shared/types';

import { Button } from './Button';
import ProductCard from './ProductCard';

export interface CatalogProps {
	title: string;
	description?: string;
	linkTitle?: string;
	url?: string;
	products: IProduct[];
}

export default function Catalog({
	title,
	description,
	linkTitle,
	url,
	products,
}: CatalogProps) {
	return (
		<div>
			<div className='mb-4 md:flex md:items-center md:justify-between'>
				<div className='max-w-2xl px-4 lg:max-w-full lg:px-0'>
					<h1 className='text-2xl font-bold'>{title}</h1>
					{description && (
						<p className='text-muted-foreground mt-2 text-sm'>{description}</p>
					)}
				</div>
				{url && linkTitle && (
					<Link href={url}>
						<Button variant='link' className='text-muted-foreground'>
							{linkTitle} <ArrowRight />
						</Button>
					</Link>
				)}
			</div>
			<div className='flex w-full items-center'>
				<div className='mt-2 grid w-full gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6'>
					{products.length ? (
						products.map(product => (
							<ProductCard key={product.id} product={product} />
						))
					) : (
						<div>Nothing found...</div>
					)}
				</div>
			</div>
		</div>
	);
}
