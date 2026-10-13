import ArrowIcon from "@/components/common/ArrowIcon";
import PortfolioSection from "@/components/common/PortfolioSection";

export default function About() {
	return (
		<PortfolioSection id="About">
			<h2 id="About-heading" className="section-heading">
				About
			</h2>
			<div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
				<div>
					<h3 className="text-2xl font-semibold text-ink sm:text-3xl">高山悠斗</h3>
					<p className="mt-4 text-base leading-8 text-muted">
						長岡技術科学大学 工学部
						<br />
						機械工学分野 学部4年 / 韋研究室
					</p>
					<p className="mt-5 text-sm leading-7 text-muted">
						技大祭実行委員会 情報局 / NUTMEG
						<br />
						フロントエンドエンジニア
					</p>
					<a
						href="https://mcweb.nagaokaut.ac.jp/~weidong/"
						aria-label="韋研究室のウェブサイト（新しいタブ）"
						className="action-link mt-5 text-sm text-plum"
						target="_blank"
						rel="noopener noreferrer"
					>
						韋研究室のウェブサイト
						<ArrowIcon className="h-4 w-4" />
					</a>
				</div>
				<div className="max-w-[65ch] text-base leading-8 text-muted sm:text-lg sm:leading-9">
					<p className="text-ink">Web・モバイルアプリの開発と、画像処理の研究に取り組んでいます。</p>
					<p className="mt-5">
						技大祭のアプリケーションやハッカソンでの制作を通して、フロントエンドの設計と実装を経験してきました。
					</p>
					<p className="mt-5">
						韋研究室では、低解像度のステレオ画像を対象に、超解像処理が左右の整合性や視差・深度推定に与える影響を研究しています。
					</p>
				</div>
			</div>
		</PortfolioSection>
	);
}
