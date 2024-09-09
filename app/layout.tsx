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
	title: "Create Next App",
	description: "Generated by create next app",
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