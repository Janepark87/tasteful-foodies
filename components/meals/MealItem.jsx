import Link from 'next/link';
import styles from './styles/MealGrid.module.css';
import Image from 'next/image';

export default function MealItem({ title, slug, image, summary, creator }) {
	return (
		<article className={styles.meal}>
			<div>
				<div className={styles.image}>
					<Image src={image} alt={title} fill priority />
				</div>

				<div className={styles.headerText}>
					<h2>{title}</h2>
					<p>by {creator}</p>
				</div>
			</div>

			<div className={styles.content}>
				<p className={styles.summary}>{summary}</p>
				<div className={styles.actions}>
					<Link href={`/meals/${slug}`}>View Details</Link>
				</div>
			</div>
		</article>
	);
}
