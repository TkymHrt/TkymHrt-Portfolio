"use client";

import { useState } from "react";
import AdminLayout from "../layout/AdminLayout";

// ダミーデータの型定義
interface PortfolioItem {
	id: number;
	title: string;
	description: string;
}

const AdminPage: React.FC = () => {
	const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([
		{ id: 1, title: "プロジェクト1", description: "プロジェクト1の説明" },
		{ id: 2, title: "プロジェクト2", description: "プロジェクト2の説明" },
	]);

	const addItem = () => {
		const newItem: PortfolioItem = {
			id: portfolioItems.length + 1,
			title: `プロジェクト${portfolioItems.length + 1}`,
			description: `プロジェクト${portfolioItems.length + 1}の説明`,
		};
		setPortfolioItems([...portfolioItems, newItem]);
	};

	const deleteItem = (id: number) => {
		setPortfolioItems(portfolioItems.filter((item) => item.id !== id));
	};

	return (
		<AdminLayout>
			<div className="min-h-screen bg-gray-100 p-4">
				<header className="bg-white shadow p-4 mb-4">
					<h1 className="text-2xl font-bold">管理者ページ</h1>
				</header>
				<main className="bg-white shadow p-4">
					{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
					<button onClick={addItem} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
						アイテムを追加
					</button>
					<ul className="space-y-4">
						{portfolioItems.map((item) => (
							<li key={item.id} className="border p-4 rounded shadow">
								<h2 className="text-xl font-semibold">{item.title}</h2>
								<p className="text-gray-600">{item.description}</p>
								{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
								<button onClick={() => deleteItem(item.id)} className="bg-red-500 text-white px-4 py-2 rounded mt-2">
									削除
								</button>
							</li>
						))}
					</ul>
				</main>
			</div>
		</AdminLayout>
	);
};

export default AdminPage;
