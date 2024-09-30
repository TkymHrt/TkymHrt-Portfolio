import { motion } from "framer-motion";
import { Element } from "react-scroll";

const motionDivClasses =
	"h-auto md:w-[80vw] w-[85vw] flex flex-col items-start bg-gradient-to-r from-purple-400/20 to-pink-600/60 backdrop-filter backdrop-blur-3xl bg-opacity-10 rounded-xl shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] p-8 md:p-10";

const products = [
	{
		id: "1",
		title: "communication-ai",
		image: "/products/communication_ai.webp",
		description:
			"生成AIと音声で会話できるWebアプリケーション。ユニバーサルなデザインにも配慮しており、誰でも使いやすい設計で作成しました。",
	},
	{
		id: "2",
		title: "GPT-Logprobs",
		image: "/products/gpt_logprobs.webp",
		description:
			"生成AIの出力に自身がない人に向けた、プロンプト作成のための指標を提供するWebアプリです。パラメータを設定し、結果を確認しながらプロンプトのクオリティ向上のための体験ができます。",
	},
	{
		id: "3",
		title: "nutfes-bingo",
		image: "/products/nutfes_bingo.webp",
		description: "技大祭のフィナーレを飾るビンゴ大会専用のアプリです。",
	},
];

const Products = () => (
	<Element name="Products">
		<motion.div
			className={motionDivClasses}
			whileHover={{ scale: 1.025 }}
			transition={{ duration: 0.3 }}
		>
			<h2 className="md:text-7xl text-6xl font-black text-slate-300 mb-5">
				Products
			</h2>
			<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{products.map((product) => (
					<div
						key={product.id}
						className="flex flex-col items-stretch p-6 bg-purple-200/70 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative"
					>
						<div className="flex-grow">
							<h3 className="text-2xl font-bold text-stone-950 mb-2">
								{product.title}
							</h3>
							<p className="text-sm text-stone-950 mb-4">
								{product.description}
							</p>
						</div>
						<div className="w-full h-48 flex items-center justify-center overflow-hidden rounded-lg mb-4">
							<img
								src={product.image}
								alt={product.title}
								className="max-w-full max-h-full object-cover"
							/>
						</div>
						<div className="absolute bottom-0 left-0 w-full h-1 border-b-2 border-dotted border-pink-300 mt-6" />
					</div>
				))}
			</div>
		</motion.div>
	</Element>
);

export default Products;
