export default function Error({ dataName }) {
	return (
		<div className="error">
			<h1>Something went wrong!</h1>
			<p>Failed to fetch {dataName} data. Please try again later.</p>
		</div>
	);
}
