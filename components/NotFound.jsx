export default function NotFound({ dataName = '' }) {
	return (
		<div className="not-found">
			<h1 style={{ textTransform: 'capitalize' }}>{dataName} Not Found!</h1>
			<p>Unfortunately, we could not find the requested page or {dataName} data.</p>
		</div>
	);
}
