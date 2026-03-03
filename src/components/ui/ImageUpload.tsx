import { ImagePlus } from 'lucide-react';
import Image from 'next/image';

import { useUpload } from '@/hooks/queries/upload/useUpload';

import { Button } from './Button';
import { Input } from './Input';

interface ImageUploadProps {
	isDisabled: boolean;
	onChange: (value: string[]) => void;
	value: string[];
}

export default function ImageUpload({
	value,
	onChange,
	isDisabled,
}: ImageUploadProps) {
	const { fileInputRef, isUploading, handleButtonClick, handleFileChange } =
		useUpload(onChange);

	return (
		<div>
			<div className='grid grid-cols-2 gap-5 sm:grid-cols-3 xl:grid-cols-6'>
				{value.map(url => (
					<div
						key={url}
						className='relative size-50 overflow-hidden rounded-md'
					>
						<Image
							className='object-cover'
							src={url}
							alt='Product image'
							fill
						/>
					</div>
				))}
			</div>
			<Button
				className={`${value.length && 'mt-4'}`}
				type='button'
				disabled={isDisabled || isUploading}
				variant='secondary'
				onClick={handleButtonClick}
			>
				<ImagePlus className='mr-2 size-4' /> Upload images
			</Button>
			<Input
				type='file'
				multiple
				hidden
				ref={fileInputRef}
				onChange={handleFileChange}
				disabled={isDisabled}
			/>
		</div>
	);
}
