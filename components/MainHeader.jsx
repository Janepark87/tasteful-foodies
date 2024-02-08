import Link from 'next/link';
import Image from 'next/image';
import styles from './styles/MainHeader.module.css';
import logo from '@/assets/icons/logo.png';
import MainHeaderBg from './MainHeaderBg';

export default function MainHeader() {
	return (
		<>
			<MainHeaderBg />
			<header className={styles.header}>
				<Link href="/" className={styles.logo} title="A plate with food on it">
					<Image src={logo} alt="Logo image" priority />
					<span>Tasteful Foodies</span>
				</Link>

				<nav className={styles.nav}>
					<ul>
						<li>
							<Link href="/meals">Meals</Link>
						</li>
						<li>
							<Link href="/community">Community</Link>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}
