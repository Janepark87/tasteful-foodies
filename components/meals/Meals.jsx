import MealItem from './MealItem';
import styles from './styles/Meals.module.css';
import { getMeals } from '@/lib/apiMeals';

export default async function Meals() {
	const meals = await getMeals();

	return (
		<ul className={styles.meals}>
			{meals.map((meal) => (
				<li key={meal.id}>
					<MealItem {...meal} />
				</li>
			))}
		</ul>
	);
}
