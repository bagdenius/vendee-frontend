import Heading from '@/components/ui/Heading';

import MainStatistics from './statistics/main/MainStatistics';
import SecondaryStatistics from './statistics/secondary/SecondaryStatistics';

export default function Store() {
	return (
		<div className='wrapper p-6'>
			<Heading title='Statistics' />
			<MainStatistics />
			<SecondaryStatistics />
		</div>
	);
}
