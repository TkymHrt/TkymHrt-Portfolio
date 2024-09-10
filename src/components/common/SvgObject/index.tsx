import { useEffect, useRef, useState } from "react";

const SvgObject = () => {
	const svgRef = useRef<HTMLObjectElement>(null);
	const [opacity, setOpacity] = useState(0);

	useEffect(() => {
		const toggleActive = () => {
			const svgItem = svgRef.current?.contentDocument;
			const svg = svgItem?.querySelector("svg");
			svg?.classList.toggle("active");
		};
		const intervalId = setInterval(toggleActive, 3500);

		return () => clearInterval(intervalId);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			const newOpacity = window.scrollY / window.innerHeight;
			setOpacity(Math.min(newOpacity, 1));
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="fixed top-0 right-0" style={{ opacity }}>
			<object
				ref={svgRef}
				className="h-screen w-auto"
				type="image/svg+xml"
				data="/selfIntroduction.svg"
			>
				お使いのブラウザはSVGをサポートしていません。
			</object>
		</div>
	);
};

export default SvgObject;
