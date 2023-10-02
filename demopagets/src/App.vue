<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!--  <gsap-demo></gsap-demo>-->
<!--  <ChildTemplate  v-model:qwe="parentValue" />-->
  <router-view></router-view>
<!--  <buttonStyles></buttonStyles>-->
  <br/>
  <el-checkbox-group>
    <el-checkbox style="" v-model="test2">
      {{ test }}
    </el-checkbox>
  </el-checkbox-group>

</template>

<script setup>

import ChildTemplate from "@/components/ChildTemplate.vue";
import buttonStyles from '@/components/gsap/buttonStyles.vue'
import {ref} from "vue";
const test2='ssss'
const test='这是一个非常长的文本内容这是一个非常长的文本内容这是一个非常长的文本内容这是一个非常长的文本内容这是一个非常长的文本内容这是一个非常长的文本内容这是一个非常长的文本内容这是一个非常长的文本内容这是一个非常长的文本内容这是一个非常长的文本内容这是一个非常长的文本内容这是一个非常长的文本内容，当它超过容器宽度时会自动换行。'
const parentValue=ref('12345')

</script>

<style>
.el-checkbox-group{
  height: auto;
  width: 100%;
}
.el-checkbox{
  //display: block!important;
  //flex-direction: row;
  //line-height: 16px;
  display: flex!important;
  justify-content: center; /* 水平居中 */
  align-items: center;
  width: 100%;
  height: auto!important;
}
.el-checkbox__input{
  display: flex!important;
}
.el-checkbox__label{
  display: flex!important;
  white-space: normal;
  word-wrap:break-word; width: 100%;
  //display: block!important;
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
