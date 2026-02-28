'use client';

import { UseFormReturn } from 'react-hook-form';

import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';

import { validEmail } from '@/shared/regex';
import { IAuthForm } from '@/shared/types';

interface AuthFieldsProps {
	form: UseFormReturn<IAuthForm, any, IAuthForm>;
	isPending: boolean;
	isLogin?: boolean;
}

export default function AuthFields({
	form,
	isPending,
	isLogin = true,
}: AuthFieldsProps) {
	return (
		<>
			{!isLogin && (
				<FormField
					control={form.control}
					name='name'
					rules={{ required: 'Please enter your name' }}
					render={({ field }) => (
						<FormItem>
							<FormLabel htmlFor='name'>Name</FormLabel>
							<FormControl>
								<Input
									id='name'
									placeholder='John Doe'
									disabled={isPending}
									autoComplete='family-name'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			)}
			<FormField
				control={form.control}
				name='email'
				rules={{
					required: 'Please enter your email',
					pattern: { value: validEmail, message: 'Please enter a valid email' },
				}}
				render={({ field }) => (
					<FormItem>
						{' '}
						<FormLabel htmlFor='email'>Email</FormLabel>
						<FormControl>
							<Input
								id='email'
								type='email'
								placeholder='johndoe@example.com'
								disabled={isPending}
								autoComplete='email'
								{...field}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={form.control}
				name='password'
				rules={{
					required: 'Please enter a password',
					minLength: {
						value: 6,
						message: 'Password should be at least 6 characters',
					},
				}}
				render={({ field }) => (
					<FormItem>
						<FormLabel htmlFor='password'>Password</FormLabel>

						<FormControl>
							<Input
								id='password'
								type='password'
								placeholder='********'
								disabled={isPending}
								autoComplete={isLogin ? 'current-password' : 'new-password'}
								{...field}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
		</>
	);
}
