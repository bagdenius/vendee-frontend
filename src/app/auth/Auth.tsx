'use client';

import Image from 'next/image';
import { useState } from 'react';

import { Button } from '@/components/ui/Button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/Card';
import { FieldSeparator } from '@/components/ui/Field';
import { Form } from '@/components/ui/Form';
import { Spinner } from '@/components/ui/Spinner';

import AuthFields from './AuthFields';
import SocialAuth from './SocialAuth';
import { useAuthForm } from './useAuthForm';

export default function Auth() {
	const [isLogin, setIsLogin] = useState(true);
	const { form, isPending, onSubmit } = useAuthForm(isLogin);

	return (
		<div className='grid min-h-screen grid-cols-1 lg:grid-cols-2'>
			<div className='flex h-full flex-col items-center justify-center'>
				<Card className='flex w-full max-w-sm flex-col items-center justify-center border-none p-4 shadow-none'>
					<CardHeader className='w-full pb-5 text-center'>
						<CardTitle className='pb-1 text-3xl font-bold'>
							{isLogin ? 'Log into your account' : 'Create an account'}
						</CardTitle>
						<CardDescription>
							{isLogin
								? 'Enter your email below to login to your account'
								: 'Fill in the form below to create your account'}
						</CardDescription>
					</CardHeader>
					<CardContent className='w-full p-0'>
						<Form {...form}>
							<form
								className='space-y-5'
								onSubmit={form.handleSubmit(onSubmit)}
							>
								<AuthFields
									form={form}
									isPending={isPending}
									isLogin={isLogin}
								/>
								<Button className='w-full' disabled={isPending}>
									{isPending ? <Spinner /> : isLogin ? 'Log in' : 'Sign up'}
								</Button>
							</form>
						</Form>
						<FieldSeparator className='mt-3 mb-2'>
							Or continue with
						</FieldSeparator>
						<SocialAuth />
					</CardContent>
					<CardFooter className='text-muted-foreground mt-0 p-0 text-sm'>
						{isLogin ? "Don't have an account?" : 'Already have an account?'}
						<Button
							variant='link'
							className='ml-1 p-0'
							onClick={() => setIsLogin(!isLogin)}
						>
							{isPending ? <Spinner /> : isLogin ? 'Sign up' : 'Log in'}
						</Button>
					</CardFooter>
				</Card>
			</div>
			<div className='hidden h-full items-center justify-center bg-black lg:flex'>
				<Image
					src='/images/logo.png'
					alt='Vendee logo'
					width={400}
					height={100}
				></Image>
			</div>
		</div>
	);
}
