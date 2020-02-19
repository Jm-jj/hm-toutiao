<template>
  <div class="container-com-a">A组件接收B组件传的值：{{msg}}</div>
</template>

<script>
import eventBus from "@/eventBus";
export default {
  data() {
    return {
      msg: ""
    };
  },
  created() {
    eventBus.$on("b2a", data => {
      this.msg = data;
    });
  }
};
</script>

<style scoped lang='less'></style>