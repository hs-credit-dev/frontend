"use client";
import { usePathname } from "next/navigation";

// used in root layout - rendered if URL includes specified string or array of strings (for future pages)
const WelcomeBanner = () => {
	const path = usePathname();
	const isDashboard = path.includes("/dashboard");
	return (
		isDashboard && (
			<section className="h-[10.9375rem] bg-[#805DBE] rounded-xl pb-14 mb-6 mx-12">
				<h2 className="text-[2rem] font-bold text-white pt-[2.125rem] pl-[4.3125rem]">
					Welcome back, Nyah
				</h2>
				<p className="text-[0.9375rem] font-light text-white pt-[1.5rem] pl-[4.3125rem]">
					The only purpose of education is{" "}
					<span className="font-bold">freedom</span>; the only method is
					<span className="font-bold"> experience</span>.
				</p>
			</section>
		)
	);
};

export default WelcomeBanner;
