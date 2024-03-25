const Header = () => {
	return (
		<div className="fixed top-0 right-0 left-0 py-4 px-6 z-10">
			<header className="flex justify-between">
				<div className="space-x-6">
					<button
						type="button"
						className="text-white text-2xl font-bold"
						onClick={() => console.log("Home")}
					>
						Home
					</button>
					<button
						type="button"
						className="text-white text-2xl font-bold"
						onClick={() => console.log("Career")}
					>
						Career
					</button>
					<button
						type="button"
						className="text-white text-2xl font-bold"
						onClick={() => console.log("activity")}
					>
						Activity
					</button>
				</div>
				<button
					type="button"
					className="text-white text-2xl font-bold"
					onClick={() => console.log("activity")}
				>
					Contacts
				</button>
			</header>
		</div>
	);
};

export default Header;
