import { useMutation } from '@tanstack/react-query';
import { ChangeEvent, useMemo, useRef } from 'react';
import { toast } from 'sonner';

import { fileService } from '@/services';

export function useUpload(onChange: (value: string[]) => void) {
	const fileInputRef = useRef<HTMLInputElement>(null);

	const { mutate: uploadFiles, isPending: isUploading } = useMutation({
		mutationKey: ['files', 'upload'],
		mutationFn: (formData: FormData) => fileService.upload(formData),
		onSuccess(data) {
			const formattedUrls = data.map(file =>
				file.url.replaceAll('\\', '/').replace(/^\/?/, '/'),
			);
			onChange(formattedUrls);
		},
		onError() {
			toast.error('An error occured while loading files');
		},
	});

	const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
		const selectedFiles = event.target.files;
		if (selectedFiles) {
			const fileArray = Array.from(selectedFiles);
			const formData = new FormData();
			fileArray.forEach(file => formData.append('files', file));
			uploadFiles(formData);
		}
	};

	const handleButtonClick = () => fileInputRef.current?.click();

	return useMemo(
		() => ({ fileInputRef, isUploading, handleFileChange, handleButtonClick }),
		[fileInputRef, isUploading, handleFileChange, handleButtonClick],
	);
}
