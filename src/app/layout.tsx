import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/app/_components/header/header";
import Footer from "@/app/_components/footer/footer";
import FeedbackModal from "./components/Modal/FeedbackModal";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "HS.Credit",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="container">
					<Header actionType="standard" />
					<main>{children}</main>
					<section className="fixed right-4 bottom-0 -mb-1 md:right-0 md:top-1/2 md:-mr-12">
						<Link href="?feedback=true">
							<button className="bg-black px-2 text-white text-xs pb-2 pt-1 rounded hover:bg-[#805DBE] md:pb-4 md:-rotate-90">
								Leave Feedback
							</button>
						</Link>
					</section>
					<FeedbackModal />
					<Footer />
				</div>
			</body>
		</html>
	);
}
