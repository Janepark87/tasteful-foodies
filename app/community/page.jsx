import Image from 'next/image';
import { communityIcon, eventsIcon, mealIcon } from '@/assets/icons/index';
import styles from './styles/page.module.css';

export default function CommunityPage() {
	return (
		<>
			<section className={styles['hero-community']}>
				<h1>
					One shared passion: <span className={styles.highlight}>Food</span>
				</h1>
				<p>Join our community and share your favorite recipes!</p>
			</section>

			<section className={styles.section}>
				<h2>Community Perks</h2>

				<ul className={styles.perks}>
					<li>
						<Image src={mealIcon} alt="A delicious meal" priority />
						<p>Share & discover recipes</p>
					</li>
					<li>
						<Image src={communityIcon} alt="A crowd of people, cooking" priority />
						<p>Find new friends & like-minded people</p>
					</li>
					<li>
						<Image src={eventsIcon} alt="A crowd of people at a cooking event" priority />
						<p>Participate in exclusive events</p>
					</li>
				</ul>
			</section>
		</>
	);
}
