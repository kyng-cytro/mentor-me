<script lang="ts" setup>
import { loadSlim } from "tsparticles-slim";
import { Engine, Container} from "tsparticles-engine";

const particlesInit = async (engine: Engine) => {
  await loadSlim(engine);
};

const particlesLoaded = async (container: Container) => {
  console.log("Particles container loaded", container);
};
</script>
<template>
  <vue-particles
    id="tsparticles"
    :particlesInit="particlesInit"
    :particlesLoaded="particlesLoaded"
    :options="{
      background: {
        color: {
          value: '',
        },
      },
      fpsLimit: 120,
      fullScreen: {
        enable: false,
        zIndex: -1,
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
          resize: true,
        },
        modes: {
          bubble: {
            distance: 500,
            duration: 2,
            opacity: 0.8,
            size: 40,
          },
          push: {
            quantity: 5,
          },
          repulse: {
            distance: 200,
            duration: 0.8,
          },
        },
      },
      particles: {
        color: {
          value: '#fff',
        },
        links: {
          color: '#fff',
          distance: 230,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: 'none',
          enable: true,
          outMode: 'bounce',
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 50,
        },
        opacity: {
          value: 0.3,
        },
        shape: {
          type: 'circle',
        },
        size: {
          random: true,
          value: 3,
        },
      },
      detectRetina: true,
    }"
  />
</template>
