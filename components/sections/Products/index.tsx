import { motion } from "framer-motion";
import { Element } from "react-scroll";

const motionDivClasses =
	"h-auto md:w-[80vw] w-[85vw] flex flex-col items-start bg-white backdrop-filter backdrop-blur-3xl bg-opacity-10 rounded-xl shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] p-8 md:p-10";

const products = [
	{
		id: "1",
		title: "Communication AI",
		image: "/products/communication_ai.webp",
		description:
			"生成AIと音声で会話できるWebアプリケーション。ユニバーサルなデザインにも配慮しており、誰でも使いやすい設計で作成しました。(Next.js, Tailwind CSS)",
		deployUrl: "",
		githubUrl: "https://github.com/takumi0616/communication-ai",
	},
	{
		id: "2",
		title: "Prompt Lab",
		image: "/products/prompt_lab.webp",
		description:
			"生成AIの出力に自身がない人に向けた、プロンプト作成のための指標を提供するWebアプリです。パラメータを設定し、結果を確認しながらプロンプトのクオリティ向上のための体験ができます。(Next.js)",
		deployUrl: "https://ai-prompt-lab.vercel.app/",
		githubUrl: "https://github.com/takumi0616/prompt-lab",
	},
	{
		id: "3",
		title: "nutfes-bingo",
		image: "/products/nutfes_bingo.webp",
		description: "技大祭のフィナーレを飾るビンゴ大会専用のアプリです。(Next.js, hasura)",
		deployUrl: "",
		githubUrl: "https://github.com/NUTFes/nutfes-Bingo",
	},
	{
		id: "4",
		title: "Giving Campaign Autofill App",
		image: "/products/giving_campaign_autofill_app.webp",
		description: "Giving Campaignの投票フォームを自動入力できるアプリです。(Flutter)",
		deployUrl: "",
		githubUrl: "https://github.com/TkymHrt/giving_campaign_autofill_app",
	},
	{
		id: "5",
        title: "Let's Pics",
        image: "/products/let's_pics.webp",
        description: "現実×英語学習×Tech。ランダムな時間にアプリから通知が来て、お題に沿った写真を撮り、高いスコアを目指すゲーム型英語学習アプリです。",
        deployUrl: "https://jphacks.nosse.net/",
        githubUrl: "https://github.com/jphacks/kz_2404",
	}
];

const Products = () => (
	<Element name="Products">
		<motion.div
			className={motionDivClasses}
			whileHover={{ scale: 1.025 }}
			transition={{ duration: 0.3 }}
			style={{ willChange: "transform", transform: "translateZ(0)" }}
		>
			<h2 className="md:text-7xl text-6xl font-black text-slate-300 mb-5">Products</h2>
			<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{products.map((product) => (
					<div
						key={product.id}
						className="flex flex-col items-stretch p-6 bg-purple-200/70 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative"
					>
						<div className="flex-grow mb-2">
							<h3 className="text-2xl font-bold text-stone-950 mb-2">{product.title}</h3>
							<p className="text-sm text-stone-950">{product.description}</p>
						</div>
						<div className="w-full h-48 flex items-center justify-center overflow-hidden rounded-lg mb-4">
							<img src={product.image} alt={product.title} className="max-w-full max-h-full object-cover" />
						</div>
						<div className="flex gap-3 mb-2">
							{product.deployUrl && (
								<a
									href={product.deployUrl}
									className="text-[#663556] hover:text-[#855070]"
									target="_blank"
									rel="noopener noreferrer"
								>
									View App
								</a>
							)}
							{product.githubUrl && (
								<a
									href={product.githubUrl}
									className="text-[#663556] hover:text-[#855070]"
									target="_blank"
									rel="noopener noreferrer"
								>
									GitHub
								</a>
							)}
						</div>
					</div>
				))}
			</div>
		</motion.div>
	</Element>
);

export default Products;
