<template>
  <img alt="Vue logo" src="./assets/logo.png">
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!--  <gsap-demo></gsap-demo>-->
  <ChildTemplate  v-model:qwe="parentValue" />
  <br/>
  <el-checkbox style="" v-model="test2">
    {{ test }}
  </el-checkbox>
</template>

<script setup>

import ChildTemplate from "@/components/ChildTemplate.vue";
import {ref} from "vue";
const test2='ssss'
const test='这是一个非常长的文本内容，当它超过容器宽度时会自动换行。'
const parentValue=ref('12345')

</script>

<style>

.el-checkbox__label{
  word-wrap:break-word; width: 20px;
  display: block;
}
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
