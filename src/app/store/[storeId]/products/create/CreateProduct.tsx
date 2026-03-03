'use client';

import { useCategories } from '@/hooks/queries/category/useCategories';
import { useColors } from '@/hooks/queries/color/useColors';

import ProductForm from '../ProductForm';

export default function CreateProduct() {
	const { categories, isPending: isLoadingCategories } = useCategories();
	const { colors, isPending: isLoadingColors } = useColors();

	return <ProductForm categories={categories || []} colors={colors || []} />;
}
