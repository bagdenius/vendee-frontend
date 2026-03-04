import Catalog from '@/components/ui/Catalog';

import { PUBLIC_URL } from '@/shared/config';
import { IProduct } from '@/shared/types';

import Hero from './Hero';

interface HomeProps {
	products: IProduct[];
}

export default function Home({ products }: HomeProps) {
	return (
		<>
			<Hero />
			<Catalog
				title='Best Sellers'
				description='Most popular products from our store'
				linkTitle='More of our best products'
				url={PUBLIC_URL.products()}
				products={products}
			/>
		</>
	);
}
