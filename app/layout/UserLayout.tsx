import { Footer, Header, HeroHeader } from "@/components/layout";

interface UserLayoutProps {
	children: React.ReactNode;
}

export default function UserLayout({ children }: UserLayoutProps) {
	return (
		<>
			<Header />
			<HeroHeader />
			{children}
			<Footer />
		</>
	);
}
