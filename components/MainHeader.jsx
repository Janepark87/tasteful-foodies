import Link from 'next/link';
import logo from '@/assets/logo.png';

export default function MainHeader() {
	return (
		<header>
			<Link href="/" title="A plate with food on it">
				<img src={logo.src} alt="Logo image" />
				<span>Tasteful Foodies</span>
			</Link>
			<nav></nav>
		</header>
	);
}
