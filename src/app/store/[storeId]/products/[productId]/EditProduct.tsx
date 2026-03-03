'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

import { useCategories } from '@/hooks/queries/category/useCategories';
import { useColors } from '@/hooks/queries/color/useColors';

import ProductForm from '../ProductForm';

import { productService } from '@/services';

export default function EditProduct() {
	const { productId } = useParams<{ productId: string }>();

	const { data: product } = useQuery({
		queryKey: ['product', productId, 'get'],
		queryFn: () => productService.getById(productId),
	});
	const { categories } = useCategories();
	const { colors } = useColors();

	return (
		<ProductForm
			product={product}
			categories={categories || []}
			colors={colors || []}
		/>
	);
}
