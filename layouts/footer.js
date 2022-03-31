import React from 'react';
import Particles from "react-tsparticles";
import '../styles/footer.css';

function Tangles() {
    const particlesInit = (main) => {
        console.log(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    let color = "#dedede";
    let particleOpacity = 0.95;
    let particlesNumber = 70;
    let shapeType = "circle";
    let particleSize = 3;
    let linesColor = "#dedede";
    let linesWidth = "0.7";
    let lineLinked = true;
    let lineOpacity = "0.4";
    let linesDistance = 150;
    let moveSpeed = 1.10;
    let hoverEffect = true;
    let hoverMode = "grab";
    let clickEffect = true;
    let clickMode = "push";

    return (
        <Particles
            id="tsparticles-custom"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fullScreen: {
                    enable: false
                },
                particles: {
                    number: {
                        value: particlesNumber,
                        density: {
                            enable: true,
                            value_area: 800,
                        },
                    },
                    color: {
                        value: color,
                    },
                    shape: {
                        // circle, edge, triangle, polygon, star, image
                        type: shapeType,
                        stroke: {
                            width: 0,
                            color: "#192231",
                        },
                        polygon: {
                            nb_sides: 5,
                        },
                    },
                    opacity: {
                        value: particleOpacity,
                        random: false,
                        anim: {
                            enable: false,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false,
                        },
                    },
                    size: {
                        value: particleSize,
                        random: true,
                        anim: {
                            enable: false,
                            speed: 40,
                            size_min: 0.1,
                            sync: false,
                        },
                    },
                    line_linked: {
                        enable: lineLinked,
                        distance: linesDistance,
                        color: linesColor,
                        opacity: lineOpacity,
                        width: linesWidth,
                    },
                    move: {
                        enable: true,
                        speed: moveSpeed,
                        direction: "none",
                        random: false,
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
                            enable: hoverEffect,
                            mode: hoverMode,
                        },
                        onclick: {
                            enable: clickEffect,
                            mode: clickMode,
                        },
                        onresize: {
                            enable: true,
                            density_auto: true,
                            density_area: 400,
                        },
                    },
                    modes: {
                        grab: {
                            distance: 140,
                            line_linked: {
                                opacity: 1,
                            },
                        },
                        bubble: {
                            distance: 400,
                            size: 40,
                            duration: 2,
                            opacity: 8,
                            speed: 3,
                        },
                        repulse: {
                            distance: 200,
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
};

export default Tangles
