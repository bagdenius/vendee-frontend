import { useRouter } from 'next/navigation';
import { FaApple, FaGithub, FaGoogle } from 'react-icons/fa';
import { toast } from 'sonner';

import { Button } from '@/components/ui/Button';

import { SERVER_URL } from '@/shared/config';

export default function SocialAuth() {
	const router = useRouter();

	return (
		<div className='flex w-full justify-center space-x-2'>
			<Button
				className='h-10 w-15'
				variant='outline'
				// onClick={() => router.push(`${SERVER_URL}/auth/apple`)}
				onClick={() => toast.info('Not implemented yet')}
			>
				<FaApple className='size-5' />
			</Button>
			<Button
				className='h-10 w-15'
				variant='outline'
				onClick={() => router.push(`${SERVER_URL}/auth/google`)}
			>
				<FaGoogle className='size-5' />
			</Button>
			<Button
				className='h-10 w-15'
				variant='outline'
				// onClick={() => router.push(`${SERVER_URL}/auth/github`)}
				onClick={() => toast.info('Not implemented yet')}
			>
				<FaGithub className='size-5' />
			</Button>
		</div>
	);
}
