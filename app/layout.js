import './globals.css';
import MainHeader from '@/components/MainHeader';

export const metadata = {
	title: 'Tasteful Foodies',
	description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<MainHeader />
				<main>{children}</main>
			</body>
		</html>
	);
}
