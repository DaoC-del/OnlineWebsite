<template>
  <div>
    <button @click="animateBackground">点击我</button>
    <div id="background" ref="background"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { gsap } from 'gsap';

const background = ref(null);

const animateBackground = () => {
  const tl = gsap.timeline();

  tl.to(background.value, {
    duration: 1,
    width: '100%',
    height: '100%',
    ease: 'power1.inOut',
  });
};
</script>

<style scoped>
button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px 40px;
  background-color: #0077FF;
  color: #ffffff;
  border: none;
  cursor: pointer;
}

#background {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  background-color: #0077FF;
  transform-origin: top left;
  pointer-events: none;
}
</style>
