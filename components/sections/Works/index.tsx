import ArrowIcon from "@/components/common/ArrowIcon";
import PortfolioSection from "@/components/common/PortfolioSection";

const milestones = [
	{
		id: "jphacks-2024",
		date: "2024年10月",
		dateTime: "2024-10",
		title: "JPHACKS2024 Hack Day 金沢会場",
		detail: "参加 / Best Hackday Award 受賞",
	},
	{
		id: "geek-expo-2024",
		date: "2024年9月",
		dateTime: "2024-09",
		title: "技育博 Vol.4 参加",
	},
	{
		id: "geek-camp-2024-12",
		date: "2024年8月",
		dateTime: "2024-08",
		title: "技育CAMP マンスリーハッカソン vol.12 参加",
	},
	{
		id: "geek-camp-2024-14",
		date: "2024年2月",
		dateTime: "2024-02",
		title: "技育CAMP マンスリーハッカソン vol.14 参加",
	},
	{
		id: "geek-exhibition-2023",
		date: "2023年7月",
		dateTime: "2023-07",
		title: "技育展2023 中部ブロック予選 参加",
	},
	{
		id: "university-entrance",
		date: "2023年4月",
		dateTime: "2023-04",
		title: "長岡技術科学大学 入学",
	},
	{
		id: "high-school-graduation",
		date: "2023年3月",
		dateTime: "2023-03",
		title: "新潟明訓高等学校 卒業",
	},
];

export default function Works() {
	return (
		<PortfolioSection id="Works">
			<div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
				<h2 id="Works-heading" className="section-heading">
					Research &amp; Works
				</h2>
				<p className="section-intro">研究と、制作活動の記録。</p>
			</div>
			<article className="grid gap-5 border-y border-line py-8 sm:grid-cols-[160px_1fr] sm:gap-8 lg:py-10">
				<time dateTime="2026-09-15" className="text-sm leading-7 text-muted">
					2026年9月15日
				</time>
				<div>
					<h3 className="text-2xl leading-snug font-semibold text-ink sm:text-3xl">企業賞【株式会社東京精密】</h3>
					<p className="mt-3 text-base leading-7 text-muted">2026年度精密工学会秋季大会学術講演会にて受賞。</p>
					<p className="mt-7 max-w-[55ch] text-lg leading-8 font-medium text-ink">
						低解像度ステレオ画像に対する超解像が左右整合性および視差・深度推定に与える影響
					</p>
					<p className="mt-4 max-w-[65ch] text-base leading-8 text-muted">
						低解像度のステレオ画像を対象に、超解像処理が左右の整合性や視差・深度推定に与える影響を研究しています。
					</p>
					<a
						href="https://mcweb.nagaokaut.ac.jp/j/archives/9754"
						className="mt-5 inline-flex min-h-11 items-center gap-3 text-base font-medium text-plum underline decoration-line underline-offset-4 hover:decoration-plum"
					>
						大学の受賞記事を読む
						<ArrowIcon className="h-4 w-4" />
					</a>
				</div>
			</article>
			<ol>
				{milestones.map((item) => (
					<li key={item.id} className="grid gap-2 border-b border-line py-6 sm:grid-cols-[160px_1fr] sm:gap-8">
						<time dateTime={item.dateTime} className="text-sm leading-7 text-muted">
							{item.date}
						</time>
						<div>
							<h3 className="text-base leading-7 font-medium text-ink sm:text-lg">{item.title}</h3>
							{item.detail && <p className="mt-1 text-sm leading-7 text-muted">{item.detail}</p>}
						</div>
					</li>
				))}
			</ol>
		</PortfolioSection>
	);
}
