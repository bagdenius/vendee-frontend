'use client';

import Image from 'next/image';
import { useState } from 'react';

import { IProduct } from '@/shared/types';

import { cn } from '@/utils/clsx';

interface ProductGalleryProps {
	product: IProduct;
}

export default function ProductGallery({ product }: ProductGalleryProps) {
	const [currentIndex, setCurrentIndex] = useState(0);

	return (
		<div>
			<Image
				className='rounded-lg'
				src={product.images[currentIndex]}
				alt={`Image of ${product.title} product`}
				width={500}
				height={500}
			/>
			<div className='mt-6 flex gap-6'>
				{product.images.map((image, index) => (
					<button
						key={index}
						onClick={() => setCurrentIndex(index)}
						className={cn(
							'cursor-pointer overflow-hidden rounded-lg border duration-300',
							index === currentIndex ? 'border-black' : 'border-transparent',
						)}
					>
						<Image
							src={image}
							alt={`Image of ${product.title} product`}
							width={100}
							height={100}
						/>
					</button>
				))}
			</div>
		</div>
	);
}
