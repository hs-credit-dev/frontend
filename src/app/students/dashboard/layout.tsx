import WelcomeBanner from "./WelcomeBanner";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="wrapper">
			<WelcomeBanner />
			<div className="main">{children}</div>
		</div>
	);
}
