export default function MealsDetailPage({ params }) {
	return (
		<>
			<h1>Meals detail page</h1>
			<p>{params.slug}</p>
		</>
	);
}
