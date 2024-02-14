'use server';

import { redirect } from 'next/navigation';
import { saveMeal } from './apiMeals';
import { revalidatePath } from 'next/cache';

export default async function shareMeal(prevState, formData) {
	const meal = {
		title: formData.get('title'),
		summary: formData.get('summary'),
		instructions: formData.get('instructions'),
		image: formData.get('image'),
		creator: formData.get('name'),
		creator_email: formData.get('email'),
	};

	const errors = validateError(meal);

	if (Object.keys(errors).length > 0) {
		// Handle errors, for example, you might want to send them back to the client
		return { errors };
	}

	await saveMeal(meal);
	revalidatePath('/meals');
	redirect('/meals');
}

function isInvalidText(text) {
	return !text || text.trim() === '';
}

function validateError(meal) {
	const validationRules = {
		title: 'Please enter a valid title',
		summary: 'Please enter a valid summary',
		instructions: 'Please enter valid instructions',
		creator: 'Please enter a valid creator name',
		creator_email: 'Please enter a valid email address',
		image: 'Please upload a valid image',
	};

	const errors = {};

	const extraValidationFn = {
		creator_email: (value) => !value.includes('@'),
		image: (value) => !value || value.size === 0,
	};

	for (const field in validationRules) {
		if (field in extraValidationFn) {
			if (extraValidationFn[field](meal[field])) errors[field] = validationRules[field];
		} else if (isInvalidText(meal[field])) errors[field] = validationRules[field];
	}

	return errors;
}
