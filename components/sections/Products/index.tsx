import { fetchAPI, getStrapiURL } from "@/lib/strapi";
import { Product } from "@/lib/types";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

const motionDivClasses =
	"h-auto md:w-[80vw] w-[85vw] flex flex-col items-start bg-white backdrop-filter backdrop-blur-3xl bg-opacity-10 rounded-xl shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] p-8 md:p-10";

async function getProducts(): Promise<Product[] | null> {
	try {
		const res = await fetchAPI(
			"/products",
			{
				populate: "*",
			},
			{
				next: {
					revalidate: 3600, // Revalidate every hour
				},
			},
		);
		return res.data;
	} catch (error) {
		console.error("Error fetching products:", error);
		return null;
	}
}

const Products = async () => {
	const products = await getProducts();

	if (!products) {
		return (
			<Element name="Products">
				<div className={motionDivClasses}>
					<h2 className="md:text-7xl text-6xl font-black text-slate-300 mb-5">Products</h2>
					<p>No products found.</p>
				</div>
			</Element>
		);
	}

	return (
		<Element name="Products">
			<motion.div
				className={motionDivClasses}
				whileHover={{ scale: 1.025 }}
				transition={{ duration: 0.3 }}
				style={{ willChange: "transform", transform: "translateZ(0)" }}
			>
				<h2 className="md:text-7xl text-6xl font-black text-slate-300 mb-5">Products</h2>
				<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{products.map((product) => {
						const imageUrl = product.attributes.image?.data?.attributes.url
							? getStrapiURL(product.attributes.image.data.attributes.url)
							: "/placeholder.png";

						return (
							<div
								key={product.id}
								className="flex flex-col items-stretch p-6 bg-purple-200/70 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative"
							>
								<div className="flex-grow mb-2">
									<h3 className="text-2xl font-bold text-stone-950 mb-2">{product.attributes.title}</h3>
									<p className="text-sm text-stone-950">{product.attributes.description}</p>
								</div>
								<div className="w-full h-48 flex items-center justify-center overflow-hidden rounded-lg mb-4">
									<img src={imageUrl} alt={product.attributes.title} className="max-w-full max-h-full object-cover" />
								</div>
								<div className="flex gap-3 mb-2">
									{product.attributes.deployUrl && (
										<a
											href={product.attributes.deployUrl}
											className="text-[#663556] hover:text-[#855070]"
											target="_blank"
											rel="noopener noreferrer"
										>
											View App
										</a>
									)}
									{product.attributes.githubUrl && (
										<a
											href={product.attributes.githubUrl}
											className="text-[#663556] hover:text-[#855070]"
											target="_blank"
											rel="noopener noreferrer"
										>
											GitHub
										</a>
									)}
								</div>
							</div>
						);
					})}
				</div>
			</motion.div>
		</Element>
	);
};

export default Products;
