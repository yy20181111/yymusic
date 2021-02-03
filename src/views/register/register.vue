<template>
  <div class="register">
    <el-form
      :model="form"
      status-icon
      :rules="rulesForm"
      ref="form"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名">
        <el-input type="" v-model="form.userName"></el-input>
      </el-form-item>
      <el-form-item label="公司名字">
        <el-input type="" v-model="form.companyName"></el-input>
      </el-form-item>
      <el-form-item label="部门名字">
        <el-input type="" v-model="form.departmentName"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="form.password"
          auto-complete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkpassword">
        <el-input
          type="password"
          v-model="form.checkpassword"
          auto-complete="off"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">注册</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>
      <div class="goLogin" @click="$router.push('/login')">已有账号点击登录</div>
    </el-form>
  </div>
</template>

<script>
import { handleRegister } from '@/api/request/user'
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.form.checkpassword !== "") {
          this.$refs.form.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.form.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      form: {
        companyName: "",
        departmentName: "",
        id: 0,
        password: "",
        phone: "",
        userName: "",
        checkpassword: "",
      },
      rulesForm: {
        password: [{ validator: validatePass, trigger: "blur" }],
        checkpassword: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate( async (valid) => {
        if (valid) {
          let res = await handleRegister(this.form)
          console.log(res)
          if( res.status == 200){
            return this.$router.push('/login')
          }
          return 
          
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="less" scoped>
.register {
  width: 500px;
  height: 500px;
  margin: 100px auto;
  border-radius: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../../assets/images/lizhi.jpg");
  background-size: cover;
  opacity: 0.7;

  // background-color: rgba(255,0,0,0.3);
  .goLogin{
    width: 130px;
    height: 20px;
    line-height: 20px;
    margin: 0 auto;
    color: red;
    font-size: 14px;
    font-weight: 900;
    cursor: pointer;
    letter-spacing: 1px;
    &:hover{
      text-decoration: underline;
    }
  }
  /deep/.el-form-item {
    margin-right: 100px;
  }
  /deep/ .el-form-item__label {
    color: #fff;
  }
}
</style>