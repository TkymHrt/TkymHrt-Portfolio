"use client";

import { useState } from "react";

import AdminLayout from "../layout/AdminLayout";

// ダミーデータの型定義
interface PortfolioItem {
	id: number;
	title: string;
	description: string;
}

export default function AdminPage() {
	const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([
		{ id: 1, title: "プロジェクト1", description: "プロジェクト1の説明" },
		{ id: 2, title: "プロジェクト2", description: "プロジェクト2の説明" },
	]);

	const addItem = () => {
		setPortfolioItems((items) => {
			const id = Math.max(0, ...items.map((item) => item.id)) + 1;
			return [...items, { id, title: `プロジェクト${id}`, description: `プロジェクト${id}の説明` }];
		});
	};

	const deleteItem = (id: number) => {
		setPortfolioItems((items) => items.filter((item) => item.id !== id));
	};

	return (
		<AdminLayout>
			<div className="min-h-screen bg-gray-100 p-4">
				<header className="mb-4 bg-white p-4 shadow">
					<h1 className="text-2xl font-bold">管理者ページ</h1>
				</header>
				<main id="main-content" tabIndex={-1} className="bg-white p-4 shadow">
					<button type="button" onClick={addItem} className="mb-4 rounded bg-blue-500 px-4 py-2 text-white">
						アイテムを追加
					</button>
					<ul className="space-y-4">
						{portfolioItems.map((item) => (
							<li key={item.id} className="rounded border p-4 shadow">
								<h2 className="text-xl font-semibold">{item.title}</h2>
								<p className="text-gray-600">{item.description}</p>
								<button
									type="button"
									aria-label={`${item.title}を削除`}
									onClick={() => deleteItem(item.id)}
									className="mt-2 rounded bg-red-500 px-4 py-2 text-white"
								>
									削除
								</button>
							</li>
						))}
					</ul>
				</main>
			</div>
		</AdminLayout>
	);
}
