<template>
  <div class="container-login">
    <el-card class="my-card">
      <img src="../../assets/logo_index.png" alt />
      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="loginRules"
        status-icon
      >
        <el-form-item prop="mobile">
          <el-input
            v-model="loginForm.mobile"
            placeholder="请输入手机号"
          ></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input
            v-model="loginForm.code"
            placeholder="请输入验证码"
            style="width:240px;margin-right:8px"
          ></el-input>
          <el-button>发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox :value="true"
            >我已阅读并同意用户协议和隐私条款</el-checkbox
          >
        </el-form-item>
        <el-form-item>
          <el-button @click="login" type="primary" style="width:100%"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import auth from "@/utils/auth.js";
export default {
  name: "app-login",
  data() {
    const checkMobile = (rule, value, callback) => {
      if (!/^1[3-9]\d{9}$/.test(value)) {
        callback(new Error("手机号格式错误"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        mobile: "13911111111",
        code: "246810"
      },
      loginRules: {
        mobile: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { validator: checkMobile, trigger: "blur" }
        ],
        code: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { len: 6, message: "验证码6个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    login() {
      this.$refs.loginForm.validate(async valid => {
        if (valid) {
          // this.$http
          //   .post(
          //     "http://ttapi.research.itcast.cn/mp/v1_0/authorizations",
          //     this.loginForm
          //   )
          //   .then(res => {
          //     auth.setUser(res.data.data);
          //     this.$router.push("/");
          //   })
          //   .catch(() => {
          //     this.$message.error("手机号或验证码错误");
          //   });
          try {
            const res = await this.$http.post("authorizations", this.loginForm);
            auth.setUser(res.data.data);
            this.$router.push("/");
          } catch (e) {
            this.$message.error("手机号或验证码错误");
          }
        }
      });
    }
  }
};
</script>

<style lang="less">
.container-login {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: url(../../assets/login_bg.jpg) no-repeat;
  background-size: cover;
  .my-card {
    width: 400px;
    height: 350px;
    transform: translate(-50%, -50%);
    position: absolute;
    left: 50%;
    top: 50%;
    img {
      width: 200px;
      display: block;
      margin: 0 auto 20px;
    }
  }
}
</style>
