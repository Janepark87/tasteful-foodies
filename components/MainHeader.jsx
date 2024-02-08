import Link from 'next/link';
import Image from 'next/image';
import styles from './styles/MainHeader.module.css';
import { logo } from '@/assets/icons/index';
import MainHeaderBg from './MainHeaderBg';
import NavLink from './NavLink';

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
							<NavLink href="/meals">Meals</NavLink>
						</li>
						<li>
							<NavLink href="/community">Community</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}
