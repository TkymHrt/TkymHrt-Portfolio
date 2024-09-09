import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans_JP } from "next/font/google";
import {
	Footer,
	Header,
	HeroHeader,
	Particle,
	ScrollProgressIndicator,
	SvgObject,
} from "./components";

export const metadata: Metadata = {
	title: "TkymHrt Portfolio",
	description:
		"This is the portfolio of Takayama Haruto, who belongs to the information department of the Nagaoka University of Technology's Cultural Festival Executive Committee.",
	creator: "TkymHrt",
	icons: {
		icon: "/FaMountainSun.svg",
	}
};

const notoSansJP = Noto_Sans_JP({
	subsets: ["latin"],
	variable: "--font-noto-sans-jp",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja" className={`${notoSansJP.variable} antialiased`}>
			<body>
				<Header />
				<HeroHeader />
				{children}
				<Footer />
				<SvgObject />
				<ScrollProgressIndicator />
				<Particle />
			</body>
		</html>
	);
}
