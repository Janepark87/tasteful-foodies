import Link from 'next/link';
import styles from './styles/page.module.css';
import MealsGrid from '@/components/meals/MealsGrid';
import { getMeals } from '@/lib/apiMeals';

export default async function MealsPage() {
	const meals = await getMeals();

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
				<MealsGrid meals={meals} />
			</section>
		</>
	);
}
