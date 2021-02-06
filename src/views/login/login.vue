<template>
  <div class="login">
    <el-form
      :model="form"
      status-icon
      ref="form"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="form.password"
          auto-complete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="gohome">登录</el-button>
        <el-button type="primary" @click="gologin">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { handlelogin } from "@/api/request/user";

import { setToken, setId } from "@/utils/cookie";

export default {
  data() {
    return {
      form: {
        username: "yy",
        password: "123456",
        phone: "",
      },
    };
  },
  methods: {
    gologin() {
      this.$router.push("/register");
    },
    
    async gohome() {
     let res = await handlelogin(this.form)
     if(res.status === 200) {
       //保存token
       setToken(res.data.data.token)
       //保存id
       setId(res.data.data.userId)
       this.$router.push('/home')
     }else{
       console('登录失败')
     }
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  width: 500px;
  position: absolute;
  top: 160px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
