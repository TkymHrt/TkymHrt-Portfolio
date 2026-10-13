import Image from "next/image";

import ArrowIcon from "@/components/common/ArrowIcon";
import PortfolioSection from "@/components/common/PortfolioSection";

const links = [
	{
		id: "github",
		href: "https://github.com/TkymHrt",
		src: "/icons/GitHub_icon.svg",
		text: "GitHub",
	},
	{
		id: "twitter",
		href: "https://twitter.com/ForHobbiesBY",
		src: "/icons/X_icon.svg",
		text: "X",
	},
	{
		id: "instagram",
		href: "https://www.instagram.com/mikan_taka.h/",
		src: "/icons/Instagram_icon.svg",
		text: "Instagram",
	},
];

export default function Contact() {
	return (
		<PortfolioSection id="Contact">
			<div className="grid gap-10 border-t border-line pt-10 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:pt-14">
				<div>
					<h2 id="Contact-heading" className="section-heading">
						Contact
					</h2>
					<p className="mt-5 max-w-[35ch] text-base leading-8 text-muted">
						制作物のコードや活動は、こちらからご覧いただけます。
					</p>
				</div>
				<ul>
					{links.map((link) => (
						<li key={link.id} className="border-b border-line">
							<a
								href={link.href}
								className="flex min-h-18 items-center justify-between gap-4 py-5 text-ink transition-colors hover:text-plum"
							>
								<span className="flex items-center gap-4">
									<Image width={28} height={28} src={link.src} alt="" />
									<span className="text-lg font-medium">{link.text}</span>
								</span>
								<ArrowIcon />
							</a>
						</li>
					))}
				</ul>
			</div>
		</PortfolioSection>
	);
}
