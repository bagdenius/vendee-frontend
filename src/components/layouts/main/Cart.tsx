import { Button } from '@/components/ui/Button';
import Heading from '@/components/ui/Heading';
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/Sheet';

export default function Cart() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant='ghost'>Cart</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetTitle>
					<Heading title='Product cart' className='text-xl' />
				</SheetTitle>
			</SheetContent>
		</Sheet>
	);
}
