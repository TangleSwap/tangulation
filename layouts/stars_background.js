import React from "react";
import Particles from "react-tsparticles";
import "../styles/stars_background.css";

function Stars() {
	return <>{StarsComponent(1, 60)}</>;
}

function StarsComponent(id, particleNumber) {
	const particlesInit = (main) => {
		console.log(main);
	};

	const particlesLoaded = (container) => {
		console.log(container);
	};

	let particlesId = `tsparticles-background-${id}`;

	return (
		<Particles
			id={particlesId}
			init={particlesInit}
			loaded={particlesLoaded}
			options={{
				fullScreen: {
					enable: false,
				},
				particles: {
					number: {
						value: particleNumber,
						density: {
							enable: true,
							value_area: 880,
						},
					},
					color: {
						value: "#ffffff",
					},
					shape: {
						type: "circle",
						stroke: {
							width: 0,
							color: "#000000",
						},
						polygon: {
							nb_sides: 5,
						},
					},
					opacity: {
						value: 0.489,
						random: true,
						anim: {
							enable: false,
							speed: 1,
							opacity_min: 0.1,
							sync: false,
						},
					},
					size: {
						value: 1.2,
						random: true,
						anim: {
							enable: false,
							speed: 40,
							size_min: 0.1,
							sync: false,
						},
					},
					line_linked: {
						enable: false,
						distance: 150,
						color: "#ffffff",
						opacity: 0.4,
						width: 1,
					},
					move: {
						enable: true,
						speed: 0.05,
						direction: "none",
						random: true,
						straight: false,
						out_mode: "out",
						bounce: false,
						attract: {
							enable: false,
							rotateX: 600,
							rotateY: 1200,
						},
					},
				},
				interactivity: {
					detect_on: "canvas",
					events: {
						onhover: {
							enable: true,
							mode: "bubble",
						},
						onclick: {
							enable: true,
							mode: "bubble",
						},
						onresize: {
							enable: true,
							density_auto: true,
							density_area: 400,
						},
					},
					modes: {
						grab: {
							distance: 400,
							line_linked: {
								opacity: 1,
							},
						},
						bubble: {
							distance: 400,
							size: 0.001,
							duration: 3,
							opacity: 1,
							speed: 3,
						},
						repulse: {
							distance: 400,
							duration: 0.4,
						},
						push: {
							particles_nb: 4,
						},
						remove: {
							particles_nb: 2,
						},
					},
				},
				retina_detect: true,
			}}
		/>
	);
}

export default Stars;
