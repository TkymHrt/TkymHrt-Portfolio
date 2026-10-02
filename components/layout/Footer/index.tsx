import ArrowIcon from "@/components/common/ArrowIcon";

export default function Footer() {
	return (
		<footer className="border-t border-line">
			<div className="shell flex flex-wrap items-center justify-between gap-5 py-7 text-sm text-muted">
				<p>&copy; 2026 Takayama Haruto</p>
				<a href="#Home" className="action-link">
					ページの先頭へ
					<ArrowIcon />
				</a>
			</div>
		</footer>
	);
}
