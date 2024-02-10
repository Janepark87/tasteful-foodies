import Link from 'next/link';
import Image from 'next/image';
import styles from './styles/page.module.css';
import { getMeal } from '@/lib/apiMeals';

export default function MealsDetailPage({ params: { slug } }) {
	const { title, image, summary, creator, creator_email, instructions } = getMeal(slug);
	const HTML_INSTRUCTIONS = instructions.replace(/\n/g, '<br />');

	return (
		<>
			<section className={styles['hero-details']}>
				<div className={styles.image}>
					<Image src={image} alt={title} fill priority />
				</div>
				<div className={styles.headerText}>
					<h1>{title}</h1>
					<p className={styles.creator}>
						by <a href={`mailto:${creator_email}`}>{creator}</a>
					</p>
					<p className={styles.summary}>{summary}</p>
				</div>
			</section>

			<section>
				<p className={styles.instructions} dangerouslySetInnerHTML={{ __html: HTML_INSTRUCTIONS }}></p>

				<Link href="/meals" className={styles['back-btn']}>
					&larr; Back
				</Link>
			</section>
		</>
	);
}
