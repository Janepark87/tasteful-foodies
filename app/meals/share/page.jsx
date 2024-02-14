'use client';
import { useFormState } from 'react-dom';
import styles from './styles/page.module.css';
import shareMeal from '@/lib/shareAction';
import MealImagePicker from '@/components/meals/MealImagePicker';
import MealSubmitButton from '@/components/meals/MealSubmitButton';

export default function ShareMealPage() {
	const [state, formAction] = useFormState(shareMeal, { errors: undefined });

	return (
		<>
			<section className={styles['hero-share-meal']}>
				<h1>
					Share your <span className={styles.highlight}>favorite meal</span>
				</h1>
				<p>Or any other meal you feel needs sharing!</p>
			</section>

			<section className={styles['form-block']}>
				<form className={styles.form} action={formAction}>
					<div className={styles.row}>
						<div>
							<label htmlFor="name">Your name</label>
							<input type="text" id="name" name="name" />
							{state.errors?.creator && <small className={styles['error']}>{state.errors?.creator}</small>}
						</div>
						<div>
							<label htmlFor="email">Your email</label>
							<input type="email" id="email" name="email" />
							{state.errors?.creator_email && <small className={styles['error']}>{state.errors?.creator_email}</small>}
						</div>
					</div>
					<div>
						<label htmlFor="title">Title</label>
						<input type="text" id="title" name="title" />
						{state.errors?.title && <small className={styles['error']}>{state.errors?.title}</small>}
					</div>
					<div>
						<label htmlFor="summary">Short Summary</label>
						<input type="text" id="summary" name="summary" />
						{state.errors?.summary && <small className={styles['error']}>{state.errors?.summary}</small>}
					</div>
					<div>
						<label htmlFor="instructions">Instructions</label>
						<textarea id="instructions" name="instructions" rows="10"></textarea>
						{state.errors?.instructions && <small className={styles['error']}>{state.errors?.instructions}</small>}
					</div>

					<MealImagePicker label="Your image" name="image" error={state.errors?.image} />

					<MealSubmitButton />
				</form>
			</section>
		</>
	);
}
