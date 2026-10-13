import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Noto_Sans_JP, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";

import MotionPreferences from "@/components/common/MotionPreferences";

import "./globals.css";

export const metadata: Metadata = {
	title: "TkymHrt Portfolio",
	description:
		"高山悠斗のポートフォリオ。長岡技術科学大学 機械工学分野・学部4年。Web制作とステレオ画像の深度推定の研究、精密工学会での受賞実績を紹介します。",
	creator: "TkymHrt",
	icons: {
		icon: "/favicon/FaMountainSun.svg",
	},
};

const notoSansJP = Noto_Sans_JP({
	subsets: ["latin"],
	variable: "--font-noto-sans-jp",
	display: "swap",
});

const spaceGrotesk = Space_Grotesk({
	subsets: ["latin"],
	variable: "--font-space-grotesk",
	display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="ja" className={`${notoSansJP.variable} ${spaceGrotesk.variable} font-noto antialiased`}>
			<body>
				<a
					href="#main-content"
					className="fixed top-4 left-4 z-50 -translate-y-24 rounded bg-plum p-3 text-white focus:translate-y-0"
				>
					本文へ移動
				</a>
				<MotionPreferences>{children}</MotionPreferences>
				<Analytics />
			</body>
		</html>
	);
}
