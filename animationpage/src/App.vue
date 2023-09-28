<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <gsap-demo></gsap-demo>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import gsapDemo from './components/gsapDemo'

export default {
  name: 'App',
  components: {
    HelloWorld,
    gsapDemo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
