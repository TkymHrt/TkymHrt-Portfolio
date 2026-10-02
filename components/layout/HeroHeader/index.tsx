import Image from "next/image";

import ArrowIcon from "@/components/common/ArrowIcon";
import letsPics from "@/public/products/let's_pics.webp";

export default function HeroHeader() {
	return (
		<section
			id="Home"
			aria-labelledby="Home-heading"
			className="shell grid gap-10 py-10 sm:py-16 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16 lg:py-20"
		>
			<div>
				<h1
					id="Home-heading"
					className="hero-name font-display text-[clamp(3.5rem,8vw,6rem)] leading-[1.02] font-medium tracking-[-0.04em]"
				>
					Takayama
					<br />
					Haruto
				</h1>
				<p className="mt-5 text-xl leading-relaxed font-medium sm:text-2xl">
					機械工学を学び、
					<br />
					使う人に届くWebをつくる。
				</p>
				<p className="mt-4 text-base leading-relaxed text-muted">
					高山 悠斗 / 長岡技術科学大学 学部4年
					<br />
					フロントエンド開発・ステレオ画像の深度推定
				</p>
				<div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-3 sm:gap-x-7">
					<a
						href="#Products"
						className="inline-flex min-h-12 items-center gap-3 rounded-full bg-plum px-6 py-3 text-base font-medium text-white transition-colors hover:bg-ink"
					>
						制作物を見る
						<ArrowIcon direction="right" />
					</a>
					<a href="#Works" className="action-link text-sm sm:text-base">
						研究・受賞について
						<ArrowIcon direction="right" />
					</a>
				</div>
			</div>
			<a
				href="#Products"
				className="group block rounded-2xl bg-lavender p-5 sm:p-7"
				aria-label="Let's Pics などの制作物を見る"
			>
				<div className="overflow-hidden rounded-xl">
					<Image
						src={letsPics}
						alt="Let's Picsのサインイン画面と英語のお題に沿って写真を撮る画面"
						sizes="(min-width: 1280px) 520px, (min-width: 1024px) 42vw, 90vw"
						preload
						className="h-auto w-full motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-[1.025]"
					/>
				</div>
				<div className="mt-5 flex items-center justify-between gap-4">
					<div>
						<p className="font-display text-xl font-medium">Let&apos;s Pics</p>
						<p className="mt-1 text-sm text-muted">写真を撮って、英語を学ぶ。</p>
					</div>
					<ArrowIcon />
				</div>
			</a>
		</section>
	);
}
