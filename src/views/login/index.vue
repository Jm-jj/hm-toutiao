<template>
  <div class="container-login">
    <el-card class="my-card">
      <img src="../../assets/logo_index.png" alt />
    </el-card>
  </div>
</template>

<script>
export default {
  name: "app-login"
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

