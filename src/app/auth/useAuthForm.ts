'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { DASHBOARD_URL } from '@/shared/config';
import { IAuthForm } from '@/shared/types';

import { authService } from '@/services';

export function useAuthForm(isLogin: boolean) {
	const router = useRouter();
	const form = useForm<IAuthForm>({
		defaultValues: { name: '', email: '', password: '' },
		mode: 'onChange',
	});
	const { mutate, isPending } = useMutation({
		mutationKey: ['auth'],
		mutationFn: (data: IAuthForm) =>
			authService.auth(isLogin ? 'login' : 'signup', data),
		onSuccess() {
			form.reset();
			toast.success(`${isLogin ? 'Logged in' : 'Signed up'} successfully`);
			router.replace(DASHBOARD_URL.home());
		},
		onError(error: any) {
			if (error.message) toast.error(error.message);
			else toast.error('An authentication error occured');
		},
	});
	const onSubmit: SubmitHandler<IAuthForm> = data => mutate(data);
	return { form, isPending, onSubmit };
}
