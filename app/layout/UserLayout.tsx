import type { ReactNode } from "react";

import { ScrollProgressIndicator } from "@/components/common";
import { Footer, Header, HeroHeader } from "@/components/layout";

export default function UserLayout({ children }: { children: ReactNode }) {
	return (
		<>
			<Header />
			<HeroHeader />
			{children}
			<Footer />
			<ScrollProgressIndicator />
		</>
	);
}
