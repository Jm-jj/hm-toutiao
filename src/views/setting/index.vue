<template>
  <div class="container-setting">
    <el-card>
      <div slot="header">
        <my-bread>个人设置</my-bread>
      </div>
      <!-- 栅格系统 -->
      <el-row>
        <el-col :span="12">
          <el-form label-width="120px">
            <el-form-item label="编号：">{{user.id}}</el-form-item>
            <el-form-item label="手机号：">{{user.mobile}}</el-form-item>
            <el-form-item label="媒体名称：">
              <el-input v-model="user.name"></el-input>
            </el-form-item>
            <el-form-item label="媒体介绍：">
              <el-input type="textarea" :rows="3" v-model="user.intro"></el-input>
            </el-form-item>
            <el-form-item label="邮箱：">
              <el-input v-model="user.email"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button @click="saveSetting()" type="primary">保存设置</el-button>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="12">
          <el-upload
            class="avatar-uploader"
            action
            :show-file-list="false"
            :http-request="uploadImage"
          >
            <img v-if="user.photo" :src="user.photo" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <p style="text-align:center;font-size:12px">修改头像</p>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import auth from "@/utils/auth";
import eventBus from "@/eventBus";
export default {
  name: "app-setting",
  data() {
    return {
      // 用户信息
      user: {
        name: "",
        intro: "",
        email: "",
        photo: ""
      }
    };
  },
  created() {
    this.getUserInfo();
  },
  methods: {
    // 上传图片
    async uploadImage({ file }) {
      // 选择图片之后，触发这个函数，把包含图片信息的对象fileInfo传入进来
      // 自己上传  使用axios进行  所有不需要额外的去配置组件了。
      // 选择图片后获取file对象，封装成formdata数据对象，使用axios进行提交。
      // console.log(fileInfo.file) 就是图片信息
      const fd = new FormData();
      fd.append("photo", file);
      const res = await this.$http.patch("user/photo", fd);
      // 预览
      this.user.photo = res.data.data.photo;
      // 本地同步
      const user = auth.getUser();
      user.photo = res.data.data.photo;
      auth.setUser(user);
      // home组件同步
      eventBus.$emit("updateUserPhoto", res.data.data.photo);
      // 提示
      this.$message.success("修改用户头像成功");
    },
    async saveSetting() {
      try {
        const { name, intro, email } = this.user;
        await this.$http.patch("user/profile", { name, intro, email });
        this.$message.success("修改用户信息成功");
        const user = auth.getUser();
        user.name = name;
        auth.setUser(user);
        eventBus.$emit("updateUserName", name);
      } catch (e) {
        this.$message.error("修改用户信息失败");
      }
    },
    async getUserInfo() {
      const res = await this.$http.get("user/profile");
      this.user = res.data.data;
    }
  }
};
</script>

<style scoped lang='less'></style>