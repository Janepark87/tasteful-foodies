import Link from 'next/link';
import styles from './styles/page.module.css';
import ImageSlides from '@/components/ImageSlides';

export default function Home() {
	return (
		<>
			<section className={styles.hero}>
				<div className={styles['image-container']}>
					<ImageSlides />
				</div>
				<div className={styles['content-container']}>
					<div className={styles['hero-title']}>
						<h1>Tasteful Food for Tasteful Foodies</h1>
						<p>Taste & share food from all over the world.</p>
					</div>
					<div className={styles.cta}>
						<Link href="/community">Join the Community</Link>
						<Link href="/meals">Explore Meals</Link>
					</div>
				</div>
			</section>

			<section>
				<div className={styles.block}>
					<h2>How it works</h2>
					<p>
						Tasteful Food is a platform for foodies to share their favorite recipes with the world. It&apos;s a place to discover new dishes, and to
						connect with other food lovers.
					</p>
					<p>Tasteful Food is a place to discover new dishes, and to connect with other food lovers.</p>
				</div>

				<div className={styles.block}>
					<h2>Why Tasteful Food?</h2>
					<p>
						Tasteful Food is a platform for foodies to share their favorite recipes with the world. It&apos;s a place to discover new dishes, and to
						connect with other food lovers.
					</p>
					<p>Tasteful Food is a place to discover new dishes, and to connect with other food lovers.</p>
				</div>
			</section>
		</>
	);
}
