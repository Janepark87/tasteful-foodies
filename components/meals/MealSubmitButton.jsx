'use client';
import { useFormStatus } from 'react-dom';
import styles from './styles/MealSubmitButton.module.css';

export default function MealSubmitButton() {
	const { pending } = useFormStatus();

	return (
		<div className={styles.actions}>
			<button type="submit" disabled={pending}>
				{pending ? 'Submitting' : 'Share Meal'}
			</button>
			;
		</div>
	);
}
