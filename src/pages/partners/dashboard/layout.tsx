export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="wrapper">
			<div className="main">{children}</div>
		</div>
	);
}
