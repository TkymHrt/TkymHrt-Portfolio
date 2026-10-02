const menuItems = [
	{ id: "About", label: "About" },
	{ id: "Products", label: "Projects" },
	{ id: "Works", label: "Research" },
	{ id: "Contact", label: "Contact" },
];

export default function Header() {
	return (
		<header className="top-0 z-40 border-b border-line bg-surface sm:sticky">
			<div className="shell flex flex-col gap-2 py-3 sm:flex-row sm:items-center sm:justify-between sm:py-4">
				<a
					href="#Home"
					aria-label="TkymHrt ホーム"
					className="flex min-h-11 items-center font-display text-2xl font-semibold tracking-tight"
				>
					TkymHrt<span className="text-plum">.</span>
				</a>
				<nav aria-label="メインナビゲーション">
					<ul className="flex flex-wrap items-center gap-x-5 gap-y-1 sm:gap-x-8">
						{menuItems.map((item) => (
							<li key={item.id}>
								<a
									href={`#${item.id}`}
									className="flex min-h-11 items-center text-sm font-medium text-muted underline-offset-8 hover:text-plum hover:underline sm:text-base"
								>
									{item.label}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
}
