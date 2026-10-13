interface ArrowIconProps {
	className?: string;
	direction?: "up-right" | "right";
}

export default function ArrowIcon({ className = "h-5 w-5", direction = "up-right" }: ArrowIconProps) {
	return (
		<svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
			<path
				d={direction === "right" ? "M4 12h15m-6-6 6 6-6 6" : "M6 18 18 6M6 6h12v12"}
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
