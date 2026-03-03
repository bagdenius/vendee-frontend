'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

import ColorForm from '../ColorForm';

import { colorService } from '@/services';

export default function EditColor() {
	const { colorId } = useParams<{ colorId: string }>();

	const { data: color } = useQuery({
		queryKey: ['color', colorId, 'get'],
		queryFn: () => colorService.getById(colorId),
	});

	return <ColorForm color={color} />;
}
