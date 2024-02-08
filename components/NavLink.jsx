'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './styles/NavLink.module.css';

export default function NavLink({ href, children }) {
	const path = usePathname();

	return (
		<Link href={href} className={path.startsWith(href) ? `${styles.link} ${styles.active}` : styles.link}>
			{children}
		</Link>
	);
}