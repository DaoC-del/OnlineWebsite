<template>
  <div class="login-container">
    <el-form
        ref="loginForm"
        :model="loginForm"
        label-width="80px"
        class="login-form"
        size="small"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="loginForm.username" clearable></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
            v-model="loginForm.password"
            type="password"
            clearable
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="blogLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const loginForm = ref({
  username: '',
  password: '',
});

const login = () => {
  // 在这里添加登录逻辑，包括验证用户名和密码
  // 如果登录成功，可以跳转到其他页面
  // 如果登录失败，可以显示错误消息
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-form {
  width: 300px;
  border: 1px solid #e0e0e0;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0px 0px 10px #e0e0e0;
}
</style>
