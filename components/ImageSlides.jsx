'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './styles/ImageSlides.module.css';
import { burger, curry, dumplings, macncheese, pizza, schnitzel, tomatoSalad } from '@/assets/foods/index';

const images = [
	{ image: burger, alt: 'A delicious, juicy burger' },
	{ image: curry, alt: 'A delicious, spicy curry' },
	{ image: dumplings, alt: 'Steamed dumplings' },
	{ image: macncheese, alt: 'Mac and cheese' },
	{ image: pizza, alt: 'A delicious pizza' },
	{ image: schnitzel, alt: 'A delicious schnitzel' },
	{ image: tomatoSalad, alt: 'A delicious tomato salad' },
];

export default function ImageSlides() {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className={styles.slideshow}>
			{images.map((image, index) => (
				<Image key={index} src={image.image} className={index === currentImageIndex ? styles.active : ''} alt={image.alt} priority />
			))}
		</div>
	);
}
