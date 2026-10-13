import Image from "next/image";

import ArrowIcon from "@/components/common/ArrowIcon";
import PortfolioSection from "@/components/common/PortfolioSection";

const products = [
	{
		id: "nutfes-bingo",
		title: "nutfes-bingo",
		image: "/products/nutfes_bingo.jpg",
		description: "技大祭のフィナーレを飾る、ビンゴ大会専用のアプリ。",
		technology: "React / Vite / Cloudflare Workers / Durable Objects / R2",
		deployUrl: "https://bingo.nutfes.net/",
		githubUrl: "https://github.com/NUTFes/nutfes-Bingo",
	},
	{
		id: "finansu",
		title: "FinanSu",
		image: "/products/finansu.jpg",
		imageAlt: "FinanSuのログイン画面",
		description: "技大祭の財務情報を管理する、NUTFes / NUTMEGのWebアプリ。",
		technology: "Next.js / Go (Echo) / MySQL",
		deployUrl: "https://finansu.nutfes.net/",
		githubUrl: "https://github.com/NUTFes/FinanSu",
	},
	{
		id: "giving-campaign-autofill",
		title: "Giving Campaign Autofill App",
		image: "/products/giving_campaign_autofill_app.webp",
		description: "Giving Campaignの投票フォームへの入力を自動化するアプリ。",
		technology: "Flutter",
		deployUrl: "",
		githubUrl: "https://github.com/TkymHrt/giving_campaign_autofill_app",
	},
	{
		id: "wake-on-lan",
		title: "Wake on LAN App",
		image: "/products/wake_on_lan_app.webp",
		description: "ブラウザからWake on LANを実行し、ネットワーク内のデバイスをリモートで起動するアプリ。",
		technology: "Next.js / Go",
		deployUrl: "",
		githubUrl: "https://github.com/TkymHrt/wake-on-lan-app",
	},
	{
		id: "communication-ai",
		title: "Communication AI",
		image: "/products/communication_ai.webp",
		description: "生成AIと音声で会話できるWebアプリ。誰でも使いやすい、ユニバーサルなデザインを目指しました。",
		technology: "Next.js / Tailwind CSS",
		deployUrl: "",
		githubUrl: "https://github.com/takumi0616/communication-ai",
	},
	{
		id: "prompt-lab",
		title: "Prompt Lab",
		image: "/products/prompt_lab.webp",
		description: "パラメータを変えながら生成AIの出力を確認し、プロンプトの質を高めるための指標を提供するWebアプリ。",
		technology: "Next.js",
		deployUrl: "https://ai-prompt-lab.vercel.app/",
		githubUrl: "https://github.com/takumi0616/prompt-lab",
	},
	{
		id: "lets-pics",
		title: "Let's Pics",
		image: "/products/let's_pics.webp",
		description:
			"届いたお題に沿って写真を撮り、高いスコアを目指すゲーム型英語学習アプリ。現実の体験と英語学習をつなぎます。",
		technology: "",
		deployUrl: "https://jphacks.nosse.net/",
		githubUrl: "https://github.com/jphacks/kz_2404",
	},
];

export default function Products() {
	return (
		<PortfolioSection id="Products">
			<div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
				<h2 id="Products-heading" className="section-heading">
					Projects
				</h2>
				<p className="section-intro">Webとモバイルでつくったもの。</p>
			</div>
			<div className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:gap-x-12 lg:gap-y-20">
				{products.map((product) => (
					<article key={product.id} className="flex min-w-0 flex-col items-start">
						<div className="relative mb-6 aspect-[16/10] w-full overflow-hidden rounded-xl bg-lavender">
							<Image
								src={product.image}
								alt={product.imageAlt ?? `${product.title}の画面`}
								fill
								sizes="(min-width: 1280px) 568px, (min-width: 768px) 46vw, 100vw"
								className="object-contain p-5 sm:p-8"
							/>
						</div>
						<h3 className="text-2xl leading-snug font-semibold text-ink">{product.title}</h3>
						<p className="mt-3 max-w-[65ch] text-base leading-7 text-muted">{product.description}</p>
						{product.technology && <p className="mt-3 text-sm leading-6 text-muted">{product.technology}</p>}
						<div className="mt-auto flex flex-wrap gap-3 pt-6">
							{product.deployUrl && (
								<a
									href={product.deployUrl}
									aria-label={`アプリを見る：${product.title}（新しいタブ）`}
									className="inline-flex min-h-11 items-center gap-2 rounded-full bg-plum px-5 py-2.5 text-sm font-medium text-surface transition-colors hover:bg-ink"
									target="_blank"
									rel="noopener noreferrer"
								>
									アプリを見る
									<ArrowIcon className="h-4 w-4" />
								</a>
							)}
							<a
								href={product.githubUrl}
								aria-label={`GitHub：${product.title}（新しいタブ）`}
								className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-plum hover:bg-lavender"
								target="_blank"
								rel="noopener noreferrer"
							>
								GitHub
								<ArrowIcon className="h-4 w-4" />
							</a>
						</div>
					</article>
				))}
			</div>
		</PortfolioSection>
	);
}
