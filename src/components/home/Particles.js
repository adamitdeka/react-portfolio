import Particles from "react-tsparticles";

function Pattern() {
  //   const particlesInit = (main) => {
  //     console.log(main);

  //     // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  //   };

  //   const particlesLoaded = (container) => {
  //     console.log(container);
  //   };
  return (
    <Particles
      id="tsparticles"
      //   init={particlesInit}
      //   loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#ffffff",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 800,
              duration: 2,
              opacity: 0.4,
              size: 40,
            },
            push: {
              quantity: 2,
            },
            repulse: {
              distance: 300,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#222222",
          },
          links: {
            color: "#222222",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1200,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
  );
}
export default Pattern;
