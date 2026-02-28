import { VariantProps, cva } from 'class-variance-authority';
import { LoaderCircle } from 'lucide-react';

import { cn } from '@/utils/clsx';

const iconVariants = cva('animate-spin text-muted-foreground', {
	variants: {
		size: { default: 'size-9', sm: 'size-6' },
	},
	defaultVariants: {
		size: 'default',
	},
});

type TypeIconVariants = VariantProps<typeof iconVariants>;

interface LoaderProps extends TypeIconVariants {}

export default function Loader({ size }: LoaderProps) {
	return <LoaderCircle className={cn(iconVariants({ size }))} />;
}
