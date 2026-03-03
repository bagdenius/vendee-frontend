'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

import CategoryForm from '../CategoryForm';

import { categoryService } from '@/services';

export default function EditCategory() {
	const { categoryId } = useParams<{ categoryId: string }>();

	const { data: category } = useQuery({
		queryKey: ['category', categoryId, 'get'],
		queryFn: () => categoryService.getById(categoryId),
	});

	return <CategoryForm category={category} />;
}
