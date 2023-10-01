<template>
  <img alt="Vue logo" src="./assets/logo.png">
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!--  <gsap-demo></gsap-demo>-->
  <ChildTemplate  v-model:qwe="parentValue" />
</template>

<script setup>

import ChildTemplate from "@/components/ChildTemplate.vue";
import {ref} from "vue";


const parentValue=ref('12345')

</script>

<style>
/* eslint-disable no-unused-vars */
/* stylelint-disable */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
