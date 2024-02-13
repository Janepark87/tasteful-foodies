'use server';

import { redirect } from 'next/navigation';
import { saveMeal } from './apiMeals';

export default async function shareMeal(formData) {
	const newMeal = {
		title: formData.get('title'),
		summary: formData.get('summary'),
		instructions: formData.get('instructions'),
		image: formData.get('image'),
		creator: formData.get('name'),
		creator_email: formData.get('email'),
	};

	await saveMeal(newMeal);
	redirect('/meals');
}
