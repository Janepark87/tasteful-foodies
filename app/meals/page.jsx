import { Suspense } from 'react';
import Link from 'next/link';
import styles from './styles/page.module.css';
import Meals from '@/components/meals/Meals';
import Loader from '@/components/loader';

export const metadata = {
	title: 'All Meals',
	description: 'Browse the delicious meals shared by our vibrant community.',
};

export default function MealsPage() {
	return (
		<>
			<section className={styles['hero-meals']}>
				<div className={styles['hero-content']}>
					<h1>
						Delicious meals, created <span className={styles.highlight}>by you</span>
					</h1>
					<p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
				</div>
				<div className={styles.cta}>
					<Link href="/meals/share">Share Your Favorite Recipe</Link>
				</div>
			</section>

			<section>
				<Suspense fallback={<Loader />}>
					<Meals />
				</Suspense>
			</section>
		</>
	);
}
