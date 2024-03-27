import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";
import options from "./options";

const ParticleBackground = () => {
	const [init, setInit] = useState(false);
	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	return init ? (
		<Particles
			id="tsparticles"
			options={options}
			className="fixed top-0 left-0 -z-30"
		/>
	) : (
		<></>
	);
};

export default ParticleBackground;
