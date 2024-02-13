import styles from './styles/page.module.css';
import shareMeal from '@/lib/shareAction';
import MealImagePicker from '@/components/meals/MealImagePicker';
import MealSubmitButton from '@/components/meals/MealSubmitButton';

export default function ShareMealPage() {
	return (
		<>
			<section className={styles['hero-share-meal']}>
				<h1>
					Share your <span className={styles.highlight}>favorite meal</span>
				</h1>
				<p>Or any other meal you feel needs sharing!</p>
			</section>

			<section className={styles['form-block']}>
				<form className={styles.form} action={shareMeal}>
					<div className={styles.row}>
						<div>
							<label htmlFor="name">Your name</label>
							<input type="text" id="name" name="name" required />
						</div>
						<div>
							<label htmlFor="email">Your email</label>
							<input type="email" id="email" name="email" required />
						</div>
					</div>
					<div>
						<label htmlFor="title">Title</label>
						<input type="text" id="title" name="title" required />
					</div>
					<div>
						<label htmlFor="summary">Short Summary</label>
						<input type="text" id="summary" name="summary" required />
					</div>
					<div>
						<label htmlFor="instructions">Instructions</label>
						<textarea id="instructions" name="instructions" rows="10" required></textarea>
					</div>

					<MealImagePicker label="Your image" name="image" />

					<MealSubmitButton />
				</form>
			</section>
		</>
	);
}
