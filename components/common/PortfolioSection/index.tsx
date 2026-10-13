import type { ReactNode } from "react";

interface PortfolioSectionProps {
	id: string;
	children: ReactNode;
}

export default function PortfolioSection({ id, children }: PortfolioSectionProps) {
	return (
		<section id={id} aria-labelledby={`${id}-heading`} className="portfolio-section shell">
			{children}
		</section>
	);
}
